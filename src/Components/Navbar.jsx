"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Image from 'next/image';

import logo from "../Assets/logo.svg";
// import searchIcon from "../Assets/search-icon.svg";
// import profileIcon from "../Assets/profile-icon.svg";
// import downArrow from "../Assets/down-arrow.svg";
// import profilePic from "../Assets/profile-pic.png";

import Modal from "./CommonComponents/Modal/CommonModal";
import LoginAndSignUpContent from "./Login&SignUpModalContent/LoginAndSignUpContent";
import SearchModalContent from "./SearchModalContent";

import { usePathname, useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  // const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isUserLoggedin, setIsUserLoggedin] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [guestPopoverVisible, setGuestPopoverVisible] = useState(false);
  const [whiteNavbar, setWhiteNavbar] = useState(false);
  const [showSearchBtn, setShowSearchBtn] = useState(true);
  const [login, setLogin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      setWhiteNavbar(false);
      setShowSearchBtn(true);
    }
    if (
      pathname === "/profile" ||
      pathname === "/search"
    ) {
      setShowSearchBtn(false);
      setWhiteNavbar(true);
    }
    if (pathname === "/imageViewer") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    if (pathname === "/checkout") {
      setShowSearchBtn(false);
      setWhiteNavbar(true);
    }
    console.log(pathname);
  }, [pathname]);

  useEffect(() => {
    handleDropdownData();
  }, [isUserLoggedin]);
  useEffect(() => {
    const handleClick = () => {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const routeToHomePg = () => {
    // navigate("/");
    router.push("/");
    setWhiteNavbar(false);
    setIsSearchModalOpen(false);
  };

  const handleDropdownData = (type) => {
    const defaultOptions =
      type === "burgerMenu"
        ? [
            { href: "#", name: "My Profile", id: "myProfile" },
            { href: "#", name: "Trips", id: "trips" },
            { href: "#", name: "Wishlist", id: "wishlist" },
            { href: "#", name: "Search Destination", id: "search" },
            { href: "#", name: "Settings", id: "settings" },
          ]
        : [
            { href: "#", name: "My Profile", id: "myProfile" },
            { href: "#", name: "Trips", id: "trips" },
            { href: "#", name: "Wishlist", id: "wishlist" },
            { href: "#", name: "Settings", id: "settings" },
          ];
    const guestOptions =
      type === "burgerMenu"
        ? [
            { href: "#", name: "Search Destination", id: "search" },
            { href: "#", name: "Log in", id: "login" },
          ]
        : [{ href: "#", name: "Log in", id: "login" }];

    setDropdownData(isUserLoggedin ? defaultOptions : guestOptions);
  };
  // const onWindowResize = () => {
  //   setIsOpen(false);
  // };

  // window.addEventListener("resize", onWindowResize);
  const handleDropdownClicked = (id) => {
    setIsSearchModalOpen(false);
    setWhiteNavbar(false);
    setIsOpen(false);
    if (id === "login") {
      setIsModalOpen(true);
      setLogin(true);
    }
    if (id === "signup") {
      setIsModalOpen(true);
      setLogin(false);
    }
    if (id === "search") {
      handleSearch();
    }
    if (id === "myProfile") {
      // navigate("/profile");
      router.push("/profile");
      setWhiteNavbar(true);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSearchCancel = () => {
    setGuestPopoverVisible(false);
    setTimeout(() => {
      setIsSearchModalOpen(false);
    }, 0);
    setWhiteNavbar(false);
  };
  const handleSearch = () => {
    setWhiteNavbar(!whiteNavbar);
    setIsSearchModalOpen(true);
  };

  return (
    <>
      {showNavbar && (
        <>
          <div
            className={`flex justify-between items-center py-[28px] px-4 md:px-6 lg:px-[120px] absolute w-full ${
              whiteNavbar
                ? "bg-white border-b border-[#E0E0E0] z-[1111]"
                : "bg-gradient-to-b from-white via-[#FFF9F9] to-transparent"
            }`}
          >
            <img
              onClick={routeToHomePg}
              className="cursor-pointer"
              src='Logo.svg'
              alt="logo"
            />
            {showSearchBtn && (
              <div
                onClick={handleSearch}
                className={`cursor-pointer hidden md:block ${
                  whiteNavbar
                    ? ""
                    : "bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink p-[1.5px] rounded-full"
                }`}
              >
                <div className="flex gap-4 mb-[1px] mr-[0.5px] py-1 bg-white rounded-full p-1 pr-5 justify-center items-center">
                  {!whiteNavbar &&  <img   src="/search-icon.svg"   alt="search" />}
                  <p
                    className={`bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope ${
                      whiteNavbar ? "text-[24px]" : "text-base"
                    } font-medium`}
                  >
                    Search Destination
                  </p>
                </div>
              </div>
            )}
            <div
              onClick={() => {
                handleDropdownData("dropdown");
                setIsOpen(!isOpen);
              }}
              className="hidden md:flex cursor-pointer justify-center items-center p-1 pr-3 h-fit gap-3 border border-black rounded-full "
            >
              <img
                src={isUserLoggedin ? "/profile-pic.png" : "/profile-icon.svg"}
                alt="_profile"
                 
              />
              {isUserLoggedin && (
                <p className="text-[#1F1C1E] font-manrope text-base font-semibold">
                  Ariful Haque
                </p>
              )}
               <img    src="/down-arrow.svg"   alt="_dropdown" />
            </div>
            <FiMenu
              className="h-6 w-6 md:hidden text-[#000]"
              id="dropdownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="click"
              onClick={() => {
                handleDropdownData("burgerMenu");
                setIsOpen(!isOpen);
              }}
            />
            {isOpen && (
              <div
                id="dropdown"
                className="absolute top-[60px] mt-[20px] right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-[8px_16px_24px_0px_rgba(0,0,0,0.32)] w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {dropdownData?.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => handleDropdownClicked(item.id)}
                        href={item.href}
                        className="flex px-4 pb-4 hover:text-black text-[#1F1C1E] font-manrope text-base font-medium hover:bg-gray-400 hover:bg-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}{" "}
                  <li>
                    <a
                      onClick={() =>
                        handleDropdownClicked(
                          isUserLoggedin ? "logout" : "signup"
                        )
                      }
                      href="#"
                      className="flex px-4 pt-4 border-t border-[#E3E1E2] text-[#1F1C1E] font-manrope text-base font-medium hover:bg-gray-400 hover:bg-gray-600"
                    >
                      {isUserLoggedin ? "Log out" : "Sign up"}
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Modal
            isModalOpen={isModalOpen}
            footer={false}
            handleCancel={handleCancel}
            title=""
            maxWidth="594px"
            children={
              <LoginAndSignUpContent
                login={login}
                setIsModalOpen={setIsModalOpen}
              />
            }
          />
          <Modal
            isModalOpen={isSearchModalOpen}
            footer={false}
            handleCancel={handleSearchCancel}
            title=""
            width="1016px"
            extraClasses="antModalMarginTop"
            children={
              <SearchModalContent
                setIsSearchModalOpen={setIsSearchModalOpen}
                setGuestPopoverVisible={setGuestPopoverVisible}
                guestPopoverVisible={guestPopoverVisible}
              />
            }
          />
        </>
      )}
    </>
  );
}

export default Navbar;
