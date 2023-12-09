import { useState, useRef } from 'react';
import Image from 'next/image';
// import closeIcon from '../../Assets/close-circle.svg';
import CommonButton from '../CommonComponents/Button/CommonButton';
import PhoneNumContent from './PhoneNumContent';
import OtpContent from './OtpContent';
import ProfileContent from './ProfileContent';


function ProfileModalContent({ setIsProfileModalOpen }) {
    const [isWelcomeContent, setIsWelcomeContent] = useState(true);
    const [isPhoneNumContent, setIsPhoneNumContent] = useState(false);
    const [isOtpContent, setIsOtpContent] = useState(false);
    const [isProfileContent, setIsProfileContent] = useState(false);
    const [step, setStep] = useState("one");
    const [fileList, setFileList] = useState([])
    const uploadField = useRef(null);

    const handleChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
    };

    const handleContinue = () => {
        if (isWelcomeContent) {
            setIsPhoneNumContent(true)
            setIsWelcomeContent(false)
            setIsOtpContent(false)
            setIsProfileContent(false)
        }
        if (isPhoneNumContent) {
            setIsOtpContent(true)
            setIsPhoneNumContent(false)
            setIsWelcomeContent(false)
            setIsProfileContent(false)
        }
        if (isOtpContent) {
            setStep('two')
            setIsProfileContent(true)
            setIsOtpContent(false)
            setIsPhoneNumContent(false)
            setIsWelcomeContent(false)
        }
        if(isProfileContent && fileList?.length < 1){
            handleChangePhoto()
        }
    }
    const handleChangePhoto = () => {
        uploadField.current.upload.uploader.onClick();
        setFileList([])
    }

    return (<>
         <img   onClick={() => setIsProfileModalOpen(false)} src="/close-circle.svg" alt="_close" className="absolute mt-2 cursor-pointer" />
        <div className="flex flex-col gap-12">
            <div className='flex flex-col gap-3 justify-center items-center pb-6 border-b border-[#EBEBEB]'>
                <p className="bg-gradient-to-r from-gradientBlue from-10% via-gradientLightBlue via-30% to-gradientPink to-90% w-fit bg-clip-text text-transparent text-center font-manrope text-2xl font-bold">Create your profile</p>
                {!isWelcomeContent && <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-[#1F1C1E] font-manrope text-sm font-bold'>Step 1 of 2</p>
                    <div className='flex gap-1'>
                        <hr className='w-20 h-1 border border-[#C75D9C] bg-[#C75D9C]' />
                        <hr className={`w-20 h-1 border ${step === 'two' ? 'border-[#C75D9C]' : 'border-[#ebebeb]'} ${step === 'two' ? 'bg-[#C75D9C]' : 'bg-[#ebebeb]'}`} />
                    </div>
                </div>}
            </div>
            <div className={`flex flex-col ${isPhoneNumContent ? 'gap-10' : 'gap-12'}`}>
                {isWelcomeContent && <div className='flex flex-col gap-3 justify-center items-center'>
                    <p className='text-[#1F1C1E] font-manrope text-2xl font-bold'>Welcome to P33R</p>
                    <p className='text-[#535052] text-center font-manrope text-base leading-6 max-w-[435px]'>Learn about accommodations, regional eateries, and interesting experiences from various countries.</p>
                </div>}
                {isPhoneNumContent && <PhoneNumContent />}
                {isOtpContent && <OtpContent />}
                {isProfileContent && <ProfileContent setFileList={setFileList} fileList={fileList} handleChange={handleChange} uploadField={uploadField} />}
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <CommonButton buttonTxt={isProfileContent ? fileList?.length < 1 ? "Upload a photo" : "Done" : "Continue"} widthClasses="w-full" onClick={handleContinue} />
                    {fileList?.length > 0 && <button onClick={handleChangePhoto} className='w-full border border-[#1F1C1E] rounded-[12px] p-3 text-[#1F1C1E] font-manrope text-base font-medium bg-white'>Change photo</button>}
                    {isOtpContent && <>
                        <p className='text-[#747073] font-manrope text-sm'>Didn’t get a text? <span className='text-[#1F1C1E] underline font-bold cursor-pointer'>Send again</span></p>
                        <p className='text-[#1F1C1E] font-manrope text-sm underline font-bold cursor-pointer'>Call me instead</p>
                    </>}
                    {(isPhoneNumContent || isOtpContent || isProfileContent) && <p className='text-[#1F1C1E] font-manrope text-sm font-bold underline cursor-pointer'>I’ll do it later</p>}
                </div>

            </div>
        </div>
    </>)
}

export default ProfileModalContent;