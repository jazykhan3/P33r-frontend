import { useState } from "react";
import CommonTextField from "../CommonComponents/TextField/CommonTextField";

function OtpContent() {
    const [codeValue1, setCodeValue1] = useState('');
    const [codeValue2, setCodeValue2] = useState('');
    const [codeValue3, setCodeValue3] = useState('');
    const [codeValue4, setCodeValue4] = useState('');
    return (<>
        <div className="flex flex-col gap-6 justify-center items-center">
            <div className='flex flex-col gap-2 justify-center items-center'>
                <p className='text-[#1F1C1E] font-manrope text-xl font-bold leading-6'>Confirm your phone number</p>
                <p className='text-[#747073] font-manrope text-sm'>Enter the 4-digit code P33R just sent to +1 (628) 267-9041</p>
            </div>
            <div className="flex gap-6 max-w-[304px] justify-center items-center">
                <CommonTextField type="text" validate={true} fieldType="otp" value={codeValue1} setValue={setCodeValue1} handleFieldValueChange={(event) => setCodeValue1(event.target.value)} />
                <CommonTextField type="text" validate={true} fieldType="otp" value={codeValue2} setValue={setCodeValue2} handleFieldValueChange={(event) => setCodeValue2(event.target.value)} />
                <CommonTextField type="text" validate={true} fieldType="otp" value={codeValue3} setValue={setCodeValue3} handleFieldValueChange={(event) => setCodeValue3(event.target.value)} />
                <CommonTextField type="text" validate={true} fieldType="otp" value={codeValue4} setValue={setCodeValue4} handleFieldValueChange={(event) => setCodeValue4(event.target.value)} />
            </div>
        </div>
    </>)
}

export default OtpContent;