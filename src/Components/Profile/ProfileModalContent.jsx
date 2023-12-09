import { useState } from "react";
import Image from 'next/image';
// import crossIcon from "../../Assets/close-circle.svg";
// import editIcon from "../../Assets/edit-profile-icon.svg";
// import profileImg from "../../Assets/profile-img.png";
import CommonTextField from "../CommonComponents/TextField/CommonTextField";
import { isEmail } from "validator";
import CommonButton from "../CommonComponents/Button/CommonButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function ProfileModalContent({ setIsProfileModalOpen }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [signUpMail, setSignUpMail] = useState({ value: "", validate: true });
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState(true);
  const [phone, setPhone] = useState("");

  const handleEmailChange = (event) => {
    isEmail(event.target.value)
      ? setSignUpMail({ value: event.target.value, validate: true })
      : setSignUpMail({ value: event.target.value, validate: false });
  };

  const handleFirstAndLastNameChange = (event, type) => {
    type === "firstName" && setFirstName(event.target.value);
    type === "lastName" && setLastName(event.target.value);
  };

  const validatePassword = (inputValue, type) => {
    // Check if the entered value has at least 8 characters.
    if (inputValue.length < 8) {
      type === "password"
        ? setPasswordValidate(false)
        : setConfirmPasswordValidate(false);
    } else {
      type === "password"
        ? setPasswordValidate(true)
        : setConfirmPasswordValidate(true);
    }
    // Check if the entered value matches the name or email.
    if (inputValue === firstName || inputValue === signUpMail) {
      type === "password"
        ? setPasswordValidate(false)
        : setConfirmPasswordValidate(false);
    } else {
      type === "password"
        ? setPasswordValidate(true)
        : setConfirmPasswordValidate(true);
    }
    // Check if the entered value contains at least one number or symbol.
    if (!/[\d!@#$%^&*]/.test(inputValue)) {
      type === "password"
        ? setPasswordValidate(false)
        : setConfirmPasswordValidate(false);
    } else {
      type === "password"
        ? setPasswordValidate(true)
        : setConfirmPasswordValidate(true);
    }
  };
  const handlePasswordChange = (event, type) => {
    type === "password"
      ? setPassword(event.target.value)
      : setConfirmPassword(event.target.value);
    validatePassword(event.target.value, type);
  };

  const handleSaveClick = () => {
    setIsProfileModalOpen(false);
  };

  return (
    <>
      <div className="p-8 flex flex-col gap-10 items-center">
        {/* Profile Modal Heading */}
        <div className="flex gap-6 justify-between items-center w-full">
          <span> </span>
          <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-2xl font-medium">
            Edit Profile Page
          </p>
          <img
            src="/close-circle.svg"
            alt="close"
            onClick={() => setIsProfileModalOpen(false)}
            className="cursor-pointer"
          />
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
           <img   src="/profile-img.png" alt="profile" />
          <img
            src="/edit-profile-icon.svg"
            alt="edit"
            className="cursor-pointer relative mt-[80px] ml-[-30px]"
          />
        </div>

        {/* Prodile Details */}
        <div className="flex flex-col gap-4">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-5">
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

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <CommonTextField
              id="signUpemail"
              label="Email"
              type="email"
              autoComplete="email"
              setValue={setSignUpMail}
              handleFieldValueChange={handleEmailChange}
              validate={signUpMail.validate}
              value={signUpMail.value}
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-2">
            <PhoneInput
              country={"eg"}
              enableSearch={false}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              className="phoneNumberField"
            />
          </div>

          {/* Password Fields */}
          <div className="flex flex-col md:flex-row gap-3">
            <CommonTextField
              id="password"
              label="Password"
              type={showPassword ? "password" : "text"}
              autoComplete="password"
              setValue={setPassword}
              handleFieldValueChange={(event) =>
                handlePasswordChange(event, "password")
              }
              validate={passwordValidate}
              value={password}
              fieldType="password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <CommonTextField
              id="password"
              label="Password"
              type={showConfirmPassword ? "password" : "text"}
              autoComplete="password"
              setValue={setConfirmPassword}
              handleFieldValueChange={(event) =>
                handlePasswordChange(event, "confirmPassword")
              }
              validate={confirmPasswordValidate}
              value={confirmPassword}
              fieldType="password"
              showPassword={showConfirmPassword}
              setShowPassword={setShowConfirmPassword}
            />
          </div>
        </div>

        {/* Save button */}
        <CommonButton
          buttonTxt="Save"
          roundedClass="rounded-full"
          paddingClasses="px-auto md:px-40 py-4"
          widthClasses="w-full"
          onClick={handleSaveClick}
        />
      </div>
    </>
  );
}

export default ProfileModalContent;
