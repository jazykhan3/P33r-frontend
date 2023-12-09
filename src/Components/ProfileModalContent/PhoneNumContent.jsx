import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function PhoneNumContent() {
    const [phone, setPhone] = useState("");

    return (<>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <p className='text-[#1F1C1E] font-manrope text-xl font-bold leading-6'>Confirm your phone number</p>
                <p className='text-[#747073] font-manrope text-sm'>This is so your Hosts, guests, or P33R can reach you.</p>
            </div>
            <div className='flex flex-col gap-2'>
                <PhoneInput
                    country={"eg"}
                    enableSearch={false}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    className='phoneNumberField'
                />
                <p className='text-[#747073] font-manrope text-sm'>We’ll call or text you to confirm your number. Standard message and date rates apply.</p>
            </div>
        </div>
    </>)
}

export default PhoneNumContent;