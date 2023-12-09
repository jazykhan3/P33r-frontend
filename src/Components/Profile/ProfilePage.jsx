import { useState } from "react";
import Image from 'next/image';
// import profileImg from "../../Assets/profile-img.png";
// import editIcon from "../../Assets/edit-icon.svg";
// import userIcon from "../../Assets/profile-user-icon.svg";
// import emailIcon from "../../Assets/profile-email-icon.svg";
// import passwordIcon from "../../Assets/profile-password-icon.svg";
// import phoneIcon from "../../Assets/profile-password-icon.svg";
import Modal from "../CommonComponents/Modal/CommonModal";
import ProfileModalContent from "./ProfileModalContent";

function ProfilePage() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const handleCancelPrfofileModal = () => {};
  return (
    <>
      <div className="bg-[#F7F9FA] pt-[151px] flex justify-center items-center">
        <div className="p-8 rounded-2xl bg-white flex justify-center items-center flex-col gap-10">
          {/* Profile Img */}
          <div className="flex flex-col gap-5 items-center">
            <img
              src="/profile-img.png"
              alt="profile"
              className="rounded-full w-[144px] h-[144px]"
            />
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <p className="text-[#1F1C1E] text-xl font-Urbanist leading-normal font-bold">
                  Ariful Haque
                </p>
                <p className="text-[#535052] font-Manrope text-sm leading-normal">
                  mailto:arifulsuvo00@gmail.com
                </p>
              </div>
              <div
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => setIsProfileModalOpen(true)}
              >
                 <img   src="/edit-icon.svg" alt="edit" />
                <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-sm font-medium">
                  Edit Profile
                </p>
              </div>
            </div>
          </div>

          {/* Profile details */}
          <div className="p-8 rounded-2xl bg-[#FAFBFC] flex flex-col gap-6">
            <p className="text-[#1F1C1E] text-xl font-Urbanist font-bold">
              Profile
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                {/* First name */}
                <div className="flex gap-4 md:min-w-[332px] items-start">
                   <img   src="/profile-user-icon.svg" alt="first_name" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                      First Name
                    </p>
                    <p className="text-[#747073] font-Manrope text-base leading-normal">
                      Ariful Haque
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex gap-4 md:min-w-[332px] items-start">
                   <img   src="/profile-email-icon.svg" alt="last_name" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                      Email Address
                    </p>
                    <p className="text-[#747073] font-Manrope text-base leading-normal">
                      arifulsuvo00@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 md:gap-20">
                {/* Last name */}
                <div className="flex gap-4 md:min-w-[332px] items-start">
                   <img   src="/profile-user-icon.svg" alt="last_name" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                      Last Name
                    </p>
                    <p className="text-[#747073] font-Manrope text-base leading-normal">
                      Suvo
                    </p>
                  </div>
                </div>
                {/* Password */}
                <div className="flex gap-4 md:min-w-[332px] items-start">
                   <img   src="/profile-password-icon.svg" alt="last_name" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                      Password
                    </p>
                    <p className="text-[#747073] font-Manrope text-base leading-normal">
                      ooooooooo
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                 <img   src="/profile-password-icon.svg" alt="last_name" />
                <div className="flex flex-col gap-1">
                  <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                    Phone Number
                  </p>
                  <p className="text-[#747073] font-Manrope text-base leading-normal">
                    Add a number so confirmed guests and P33R can get in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isProfileModalOpen}
        footer={false}
        handleCancel={handleCancelPrfofileModal}
        title=""
        width="564px"
        extraClasses="antModalMarginTop"
        children={
          <ProfileModalContent setIsProfileModalOpen={setIsProfileModalOpen} />
        }
      />
    </>
  );
}

export default ProfilePage;
