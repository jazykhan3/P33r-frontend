import { useState } from 'react';
import Image from 'next/image';
// import uploadImg from '../../Assets/upload-img.svg';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

function ProfileContent({ fileList, setFileList, handleChange, uploadField }) {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');


    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };
    return (<>
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className='flex flex-col gap-8 justify-center items-center'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-[#1F1C1E] font-manrope text-xl font-bold leading-6'>{fileList.length < 1 ? "Add a profile photo" : "Looking good!"}</p>
                    <p className='text-[#747073] font-manrope text-sm text-center'>{fileList.length < 1 ? "Pick an image that shows your face. Hosts won’t be able to see your profile photo unite your reservation is confirmed." : "This photo will be added to your profile. It’ll also be seen by hosts or guest, so be sure it doesn’t include any personal or sensitive info."}</p>
                </div>
                <div className='flex justify-center otems-center'>
                    <Upload
                        id="UploadProfilePhoto"
                        listType="picture-circle"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        ref={uploadField}
                    >
                        {fileList?.length < 1 ?  <img   src="/upload-img.svg" alt="_upload" /> : null}
                    </Upload>
                </div>
            </div>
        </div>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={() => setPreviewOpen(false)}>
            <img
                alt="example"
                style={{
                    width: '100%',
                }}
                src={previewImage}
            />
        </Modal>
    </>)
}

export default ProfileContent;