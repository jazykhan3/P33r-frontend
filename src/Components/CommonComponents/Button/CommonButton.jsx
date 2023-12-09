function CommonButton({ widthClasses, buttonTxt, onClick, roundedClass = 'rounded-[12px]', paddingClasses = 'p-3'}) {
    return (<>
        <button onClick={onClick} className={` ${roundedClass} bg-gradient-to-r from-gradientBlue from-10% via-gradientLightBlue via-30% to-gradientPink to-90% ${paddingClasses} flex justify-center items-center ${widthClasses} text-white font-manrope text-base font-medium`}>{buttonTxt}</button>
    </>)
}

export default CommonButton;