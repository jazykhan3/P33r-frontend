import { useState } from "react";
import Image from 'next/image';

// import closeIcon from "../../Assets/close-circle.svg";
// import fbIcon from "../../Assets/fb-icon.svg";
// import googleIcon from "../../Assets/google-icon.svg";
// import appleIcon from "../../Assets/apple-icon.svg";
// import greenTick from "../../Assets/green-tick.svg";
// import redCross from "../../Assets/red-cross.svg";

import CommonButton from "../CommonComponents/Button/CommonButton";
import CommonTextField from "../CommonComponents/TextField/CommonTextField";
import Modal from "../CommonComponents/Modal/CommonModal";
import ProfileModalContent from "../ProfileModalContent/ProfileModalContent";
import { isEmail } from "validator";

function LoginAndSignUpContent({ login, setIsModalOpen }) {
  const [loginMail, setLoginMail] = useState({ value: "", validate: true });
  const [signUpMail, setSignUpMail] = useState({ value: "", validate: true });
  const [eightCharacterPassword, setEightCharacterPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [notNameAndEmail, setNotNameAndEmail] = useState(false);
  const [containSymOrNum, setContainSymOrNum] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [policies, setPolicies] = useState(false);

  // Setting Emails
  const handleLoginAndSignUpEmailChange = (event, type) => {
    type === "login"
      ? isEmail(event.target.value)
        ? setLoginMail({ value: event.target.value, validate: true })
        : setLoginMail({ value: event.target.value, validate: false })
      : isEmail(event.target.value)
      ? setSignUpMail({ value: event.target.value, validate: true })
      : setSignUpMail({ value: event.target.value, validate: false });
  };

  // Setting First and Last Name
  const handleFirstAndLastNameChange = (event, type) => {
    type === "firstName" && setFirstName(event.target.value);
    type === "lastName" && setLastName(event.target.value);
  };

  // Setting Password
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  // Validating Password
  const validatePassword = (inputValue) => {
    // Check if the entered value has at least 8 characters.
    if (inputValue.length < 8) {
      setEightCharacterPassword(false);
      setPasswordValidate(false);
    } else {
      setEightCharacterPassword(true);
      setPasswordValidate(true);
    }
    // Check if the entered value matches the name or email.
    if (inputValue === firstName || inputValue === signUpMail) {
      setNotNameAndEmail(false);
      setPasswordValidate(false);
    } else {
      setNotNameAndEmail(true);
      setPasswordValidate(true);
    }
    // Check if the entered value contains at least one number or symbol.
    if (!/[\d!@#$%^&*]/.test(inputValue)) {
      setContainSymOrNum(false);
      setPasswordValidate(false);
    } else {
      setContainSymOrNum(true);
      setPasswordValidate(true);
    }
  };

  const handleContinue = () => {
    console.log(!login, policies, passwordValidate)
    if (!login && policies && passwordValidate) {
      setIsModalOpen(false);
      setIsProfileModalOpen(true);
    }
  };

  const handleProfileModalCancel = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
      <img
        onClick={() => setIsModalOpen(false)}
        src="/close-circle.svg"
        alt="_close"
        className="absolute mt-2 cursor-pointer"
      />

      {/* Heading */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="bg-gradient-to-r from-gradientBlue from-10% via-gradientLightBlue via-30% to-gradientPink to-90% w-fit bg-clip-text text-transparent text-center font-manrope text-[24px] font-bold">
            Log in or Sign up
          </p>
          <p className="text-[#747073] font-manrope text-base">
            Welcome to P33R
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-6 border-t border-[#EBEBEB]">
          {/* Login And Sign Up Content  on condition basis */}
          {login ? (
            <>
              {/* Login content */}
              <CommonTextField
                id="email"
                label="Email"
                type="email"
                autoComplete="email"
                setValue={setLoginMail}
                handleFieldValueChange={(event) =>
                  handleLoginAndSignUpEmailChange(event, "login")
                }
                validate={loginMail.validate}
                value={loginMail.value}
              />
            </>
          ) : (
            <>
              {/* Sign Up Content */}
              <div className="flex flex-col gap-8">
                {/* Nname Fields */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-5">
                    <div className="w-full">
                      <CommonTextField
                        id="firstName"
                        extraClasses="w-full"
                        label="First name"
                        type="text"
                        autoComplete="text"
                        setValue={setFirstName}
                        value={firstName}
                        handleFieldValueChange={(event) =>
                          handleFirstAndLastNameChange(event, "firstName")
                        }
                        validate={true}
                      />
                    </div>
                    <div className="w-full">
                      <CommonTextField
                        id="lastName"
                        extraClasses="w-full"
                        label="Last name"
                        type="text"
                        autoComplete="text"
                        setValue={setLastName}
                        value={lastName}
                        handleFieldValueChange={(event) =>
                          handleFirstAndLastNameChange(event, "lastName")
                        }
                        validate={true}
                      />
                    </div>
                  </div>
                  <p className="text-[#747073] font-manrope text-[14px]">
                    Make sure it matches the name on your government ID.
                  </p>
                </div>

                {/* Sign up Email */}
                <div className="flex flex-col gap-2">
                  <CommonTextField
                    id="signUpemail"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    setValue={setSignUpMail}
                    handleFieldValueChange={(event) =>
                      handleLoginAndSignUpEmailChange(event, "signup")
                    }
                    validate={signUpMail.validate}
                    value={signUpMail.value}
                  />
                  <p className="text-[#747073] font-manrope text-[14px]">
                    We’ll email you trip confirmations and receipts.
                  </p>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-3">
                  <CommonTextField
                    id="password"
                    label="Password"
                    type={showPassword ? "password" : "text"}
                    autoComplete="password"
                    setValue={setPassword}
                    handleFieldValueChange={handlePasswordChange}
                    validate={passwordValidate}
                    value={password}
                    fieldType="password"
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex gap-1 items-center">
                      <img
                        src={eightCharacterPassword ? "/green-tick.svg" : "/red-cross.svg"}
                        alt="_icon"
                      />
                      <p
                        className={`${
                          eightCharacterPassword
                            ? "text-[#3A7E25]"
                            : "text-[#BD2D19]"
                        } font-manrope text-[12px]`}
                      >
                        Password strength: weak
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img
                        src={notNameAndEmail ? "/green-tick.svg" : "/red-cross.svg"}
                        alt="_icon"
                      />
                      <p
                        className={`${
                          notNameAndEmail ? "text-[#3A7E25]" : "text-[#BD2D19]"
                        } font-manrope text-[12px]`}
                      >
                        Can’t contain your name or email address
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img
                        src={eightCharacterPassword ? "/green-tick.svg" : "/red-cross.svg"}
                        alt="_icon"
                      />
                      <p
                        className={`${
                          eightCharacterPassword
                            ? "text-[#3A7E25]"
                            : "text-[#BD2D19]"
                        } font-manrope text-[12px]`}
                      >
                        At least 8 characters
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img
                        src={containSymOrNum ? "/green-tick.svg" : "/red-cross.svg"}
                        alt="_icon"
                      />
                      <p
                        className={`${
                          containSymOrNum ? "text-[#3A7E25]" : "text-[#BD2D19]"
                        } font-manrope text-[12px]`}
                      >
                        Contains a number or symbol
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start">
                <input
                  className="mt-2"
                  type="checkbox"
                  id="policies"
                  name="policies"
                  value={policies}
                  onChange={(e) => setPolicies(e.target.checked)}
                />
                <p className="text-[#747073] font-manrope text-[14px]">
                  By selecting{" "}
                  <span className="text-[#747073] font-bold">
                    Agree and continue
                  </span>
                  , i agree to P33R’s{" "}
                  <span className="text-[#2E4F9E] font-bold cursor-pointer">
                    Terms of service, Payments Terms of Service
                  </span>
                  , and{" "}
                  <span className="text-[#2E4F9E] font-bold cursor-pointer">
                    Nondiscrimination Policy
                  </span>
                  , and acknowledge the{" "}
                  <span className="text-[#2E4F9E] font-bold cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </>
          )}

          {/* Continue Btn */}
          <CommonButton
            buttonTxt="Continue"
            widthClasses="w-full"
            onClick={handleContinue}
          />

          {/* Social Media Logins */}
          <div className="flex gap-3  justify-center items-center">
            <hr className="w-[50%] text-[#EBEBEB]" />
            <p className="text-[#747073] font-manrope text-sm font-medium">
              OR
            </p>
            <hr className="w-[50%] text-[#EBEBEB]" />
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex gap-3 py-3 px-6 justify-center items-center rounded-[12px] border border-[#E0E0E0]">
               <img   src="/fb-icon.svg" alt="_socialMedia" />
              <p className="text-[ #535052] font-manrope text-[14px]">
                Continue with Facebook
              </p>
            </button>
            <button className="flex gap-3 py-3 px-6 justify-center items-center rounded-[12px] border border-[#E0E0E0]">
               <img   src="/google-icon.svg" alt="_socialMedia" />
              <p className="text-[ #535052] font-manrope text-[14px]">
                Continue with Google
              </p>
            </button>
            <button className="flex gap-3 py-3 px-6 justify-center items-center rounded-[12px] border border-[#E0E0E0]">
               <img   src="/apple-icon.svg" alt="_socialMedia" />
              <p className="text-[ #535052] font-manrope text-[14px]">
                Continue with Apple
              </p>
            </button>
          </div>
        </div>
        <Modal
          isModalOpen={isProfileModalOpen}
          footer={false}
          handleCancel={handleProfileModalCancel}
          title=""
          maxWidth="594px"
          children={
            <ProfileModalContent
              setIsProfileModalOpen={setIsProfileModalOpen}
            />
          }
        />
      </div>
    </>
  );
}

export default LoginAndSignUpContent;
