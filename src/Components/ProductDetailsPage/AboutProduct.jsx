/* eslint-disable default-case */
import { useState } from "react";
import Image from 'next/image';

// import productDetailImd1 from "../../Assets/product-detail-img-1.png";
// import productDetailImd2 from "../../Assets/product-detail-img-2.png";
// import productDetailImd3 from "../../Assets/product-detail-img-3.png";
// import productDetailImd4 from "../../Assets/product-detail-img-4.png";
// import productDetailImd5 from "../../Assets/product-detail-img-5.png";
// import grayCalenderIcon from "../../Assets/gray-calender-icon.svg";
// import pinkCalenderIcon from "../../Assets/pink-calender-icon.svg";
// import grayPersonIcon from "../../Assets/gray-person-icon.svg";
// import pinkPersonIcon from "../../Assets/pink-person-icon.svg";
// import infoCircleIcon from "../../Assets/info-circle-icon.svg";
// import poolIcon from "../../Assets/pool-icon.svg";
// import dryerIcon from "../../Assets/dryer-icon.svg";
// import shampooIcon from "../../Assets/shampoo-icon.svg";
// import waterIcon from "../../Assets/water-icon.svg";
// import tvIcon from "../../Assets/tv-icon.svg";
// import kitchenIcon from "../../Assets/kitchen-icon.svg";
// import parkingIcon from "../../Assets/parking-icon.svg";
// import gymIcon from "../../Assets/gym-icon.svg";
// import workspaceIcon from "../../Assets/workspace-icon.svg";
// import wifiIcon from "../../Assets/wifi-icon.svg";
// import cartIcon from "../../Assets/cart-icon.svg";
// import starIcon from "../../Assets/star-icon.svg";
// import locationIcon from "../../Assets/location-icon.png"  ;

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Popover, Calendar, DatePicker } from "antd";
import CommonButton from "../CommonComponents/Button/CommonButton";
// import { useNavigate } from "react-router-dom";
import Modal from "../CommonComponents/Modal/CommonModal";
import AboutModalContent from "./AboutModalContent";
import ServiceModalContent from "./ServiceModalContent";
import { useRouter } from "next/navigation";

function AboutProduct() {
  // const navigate = useNavigate();
  const router = useRouter();
  const [focusCheckinField, setFocusCheckinField] = useState(false);
  const [checkin, setCheckin] = useState(null);
  const [focusCheckoutField, setFocusCheckoutField] = useState(false);
  const [focusGuestField, setFocusGuestField] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [checkout, setCheckout] = useState(null);
  const [guestPopoverVisible, setGuestPopoverVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const roomServices = [
    { name: "Swimming pool", icon: "/pool-icon.svg" },
    { name: "Hair Dryer", icon: "/dryer-icon.svg" },
    { name: "Shampoo", icon: "/shampoo-icon.svg" },
    { name: "Hot Water", icon: "/water-icon.svg" },
    { name: "TV", icon: "/tv-icon.svg" },
    { name: "Kitchen", icon: "/kitchen-icon.svg" },
    { name: "Parking", icon: "/parking-icon.svg" },
    { name: "Gym", icon: "/gym-icon.svg" },
    { name: "Workplace", icon: "/workspace-icon.svg" },
    { name: "Wifi", icon: "/wifi-icon.svg" },
  ];
  const guestsDropdownContent = [
    { id: "adults", name: "Adults", description: "Age 13+", count: adults },
    {
      id: "children",
      name: "Children",
      description: "Ages 2-12",
      count: children,
    },
    {
      id: "infants",
      name: "Infants",
      description: "Under 2",
      count: infants,
    },
    {
      id: "pets",
      name: "Pets",
      description: "Bringing a service animal?",
      count: pets,
    },
  ];

  const handleAddAndRemoveGuests = (type, id) => {
    switch (id) {
      case "adults":
        type === "inc"
          ? setAdults(adults + 1)
          : adults > 0 && setAdults(adults - 1);
        break;
      case "children":
        type === "inc"
          ? setChildren(children + 1)
          : children > 0 && setChildren(children - 1);
        break;
      case "infants":
        type === "inc"
          ? setInfants(infants + 1)
          : infants > 0 && setInfants(infants - 1);
        break;
      case "pets":
        type === "inc" ? setPets(pets + 1) : pets > 0 && setPets(pets - 1);
        break;
    }
  };

  const handleCloseGuestPopover = () => {
    setGuestPopoverVisible(false);
    setFocusGuestField(false);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  const imagesArray = [
    { id: 1, img: "/product-detail-img-1.png" },
    { id: 2, img: "/product-detail-img-2.png" },
    { id: 3, img: "/product-detail-img-3.png" },
    { id: 4, img: "/product-detail-img-4.png" },
    { id: 5, img: "/product-detail-img-2.png" },
    { id: 6, img: "/product-detail-img-1.png" },
    { id: 7, img: "/product-detail-img-2.png" },
    { id: 8, img: "/product-detail-img-3.png" },
    { id: 9, img: "/product-detail-img-4.png" },
    { id: 10, img: "/product-detail-img-2.png" },
    { id: 11, img: "/product-detail-img-4.png" },
    { id: 12, img: "/product-detail-img-1.png" },
    { id: 13, img: "/product-detail-img-2.png" },
    { id: 14, img: "/product-detail-img-3.png" },
    { id: 15, img: "/product-detail-img-4.png" },
    { id: 16, img: "/product-detail-img-1.png" },
  ];
  const handleOpenImageViewer = () => {
    // navigate("/imageViewer", {
    //   state: { imagesArray: imagesArray },
    // });
    router.push("/imageViewer", {
      page: "/imageViewer",
      query: { imagesArray: JSON.stringify(imagesArray) },
    });
  };

  const handleAboutModalOpen = () => {
    setIsModalOpen(true);
    setModalType("aboutModal");
  };

  const handleOpenServicesModal = () => {
    setIsModalOpen(true);
    setModalType("serviceModal");
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  const handleAddToCart = () => {
    router.push("/checkout");
  };

  const content = (
    <div className="flex flex-col gap-4 max-w-[400px]">
      <div className="p-6 flex flex-col gap-5">
        {guestsDropdownContent.map((item, index) => (
          <div key={index} className="flex gap-4 justify-between items-center flex-wrap">
            <div className="flex flex-col">
              <p className="text-[#535052] font-bold text-base leading-normal">
                {item.name}
              </p>
              <p
                className={`text-[#747073] text-base leading-normal ${
                  item.id === "pets" ? "underline cursor-pointer" : ""
                }`}
              >
                {item.description}
              </p>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <span
                className={`py-1 px-3 cursor-pointer border ${
                  item.count <= 0 ? "border-[#D5CED2]" : "border-[#535052]"
                } rounded-full `}
                onClick={() => handleAddAndRemoveGuests("dec", item.id)}
              >
                -
              </span>
              <span
                className={`${
                  item.count <= 0 ? "text-[#D5CED2]" : "text-[#535052]"
                }`}
              >
                {item.count}
              </span>
              <span
                className="py-1 px-[10px] cursor-pointer border border-[#535052] rounded-full"
                onClick={() => handleAddAndRemoveGuests("inc", item.id)}
              >
                +
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#747073] font-Manrope text-sm leading-normal">
        This place has a maximum of 6 guests, not including infants. Pets aren’t
        allowed
      </p>
      <div
        className="flex justify-end items-center underline text-sm cursor-pointer"
        onClick={handleCloseGuestPopover}
      >
        Close
      </div>
    </div>
  );
  return (
    <>
      <div className="pt-[135px] flex flex-col gap-8 justify-center items-center">
        {/* Images Secton */}
        <div className="flex gap-3 flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2">
             <img   src="/product-detail-img-1.png" alt="pd" className=" w-full h-full" />
          </div>
          <div className="flex flex-col gap-3 w-full sm:w-1/2">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full sm:w-1/2">
                <img
                  src="/product-detail-img-2.png"
                  alt="pd"
                  className=" w-full h-full"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  src="/product-detail-img-3.png"
                  alt="pd"
                  className=" w-full h-full"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full sm:w-1/2">
                <img
                  src="/product-detail-img-4.png"
                  alt="pd"
                  className=" w-full h-full"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <img
                  src="/product-detail-img-5.png"
                  alt="pd"
                  className=" w-full h-full"
                />
                <div className="flex justify-center items-center absolute w-full sm:w-auto heightAvailable sm:h-auto mt-[-75%] sm:mt-0 sm:relative sm:top-[-57%]">
                  <button
                    onClick={handleOpenImageViewer}
                    className="px-4 py-3 rounded-[12px] backdropBtnFilter text-white text-sm font-Manrope leading-normal  "
                  >
                    See all 10 photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-col lg:flex-row pb-12 border-b border-[#E0E0E0] w-full">
          <div className="w-full lg:w-2/3 flex flex-col gap-16 justify-start items-start">
            {/* About Section */}
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-4 pb-6 border-b border-[#E0E0E0] w-full">
                <p className="text-[#1F1C1E] font-Manrope text-[28px] font-bold">
                  Vintage Airstream Suite on Top of a Hill
                </p>
                <div className="flex gap-4 items-start justify-start">
                  <div className="flex gap-2 items-center">
                     <img   src="/star-icon.svg"   alt="_rate" />
                    <div className="flex gap-2 items-center">
                      <p className="text-[#1F1C1E] font-Manrope text-base font-medium leading-normal">
                        4.8
                      </p>
                      <p className="text-[#747073] font-Manrope text-base font-medium leading-normal">
                        (230 Reviews)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                     <img   src="/location-icon.png" alt="location" />
                    <p className="text-[#1F1C1E] font-Manrope text-base font-medium leading-normal">
                      Calaca, Calabarzon, Philippines
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 pb-12 border-b border-[#E0E0E0] w-full">
                <div className="flex flex-col gap-4 items-start">
                  <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
                    About this place
                  </p>
                  <p className="text-[#535052] font-Manrope text-base">
                    Newly renovated private room, on the 2nd floor with Ombra
                    Caffe No.3 downstair. It is close to the main road so
                    transportation is so convenient.The room was decorated with
                    warm natural touch. Comfortable large usable area. There are
                    b Bedrooms and bathrooms within. Big balcony and kitchen is
                    available. There is also living area that you can spent time
                    together with your happy family or lovely friends. ...
                  </p>
                </div>
                <button
                  className="w-fit py-2 px-4 rounded-full border border-[#747073] text-[#535052] font-Manrope text-sm"
                  onClick={handleAboutModalOpen}
                >
                  Read more
                </button>
              </div>
            </div>
            {/* Room Services */}
            <div className="flex flex-col gap-6 pb-12 border-b border-[#E0E0E0] w-full">
              <div className="flex flex-col gap-4 items-start">
                <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
                  Room services
                </p>
                <div className="flex gap-8 items-center flex-wrap">
                  {roomServices.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 min-w-[160px]">
                       <img   src={item.icon} alt="service" />
                      <p className="text-[#535052] text-base font-Manrope leading-normal">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className="w-fit py-2 px-4 rounded-full border border-[#747073] text-[#535052] font-Manrope text-sm"
                onClick={handleOpenServicesModal}
              >
                Show all 66 services
              </button>
            </div>

            {/* Calendar Section*/}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 items-start">
                <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
                  9 Night at Vintage Airstream
                </p>
                <p className="text-[#535052] font-Manrope text-base leading-normal">
                  January 26, 2023 - February 3, 2023
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                  <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
                <div className="flex justify-end items-center underline text-[#535052] font-Manrope text-base leading-normal cursor-pointer font-medium">
                  Clean dates
                </div>
              </div>
            </div>
          </div>

          {/* Pricing details */}
          <div className="w-full lg:w-1/3 p-6 rounded-[20px] bg-[#F2F2F2] flex flex-col gap-8 h-fit">
            <div className="flex flex-col gap-5">
              <div className="flex gap-6 justify-between items-center">
                <p className="text-[#1F1C1E] font-Urbanist text-2xl font-medium">
                  Pricing details
                </p>
                <div className="flex gap-2 items-center">
                  <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
                    $250
                  </p>
                  <p className="text-[#535052] text-Manrope text-sm">night</p>
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-center">
                  <FormControl sx={{ my: 1, minWidth: 120 }} className="w-full">
                    <InputLabel
                      htmlFor="grouped-native-select"
                      className={`ml-[30px] ${
                        checkin || focusCheckinField
                          ? "text12px mt-[-12px]"
                          : "text16px"
                      } text-[#747073] selectLabel cursor-pointer`}
                    >
                      Check in
                    </InputLabel>

                    <DatePicker
                      size="small"
                      onFocus={() => setFocusCheckinField(true)}
                      placeholder=""
                      onBlur={() => setFocusCheckinField(false)}
                      suffixIcon={
                        <div>
                          <img
                            className=""
                            src={
                              checkin || focusCheckinField
                                ? "/pink-calender-icon.svg"
                                : "/gray-calender-icon.svg"
                            }
                            alt="_checkin"
                          />
                        </div>
                      }
                      prefixCls=""
                      className={`h-[55.97px] rounded-[12px] bg-white datePickerField border cursor-pointer ${
                        focusCheckinField
                          ? "border-gradientPink "
                          : "border-none"
                      }`}
                      onChange={(e) => setCheckin(e)}
                    />
                  </FormControl>
                  <FormControl sx={{ my: 1, minWidth: 120 }} className="w-full">
                    <InputLabel
                      htmlFor="grouped-native-select"
                      className={`ml-[30px] cursor-pointer ${
                        checkout || focusCheckoutField
                          ? "text12px mt-[-12px]"
                          : "text16px"
                      } text-[#747073] selectLabel cursor-pointer`}
                    >
                      Check out
                    </InputLabel>

                    <DatePicker
                      size="small"
                      onFocus={() => setFocusCheckoutField(true)}
                      placeholder=""
                      onBlur={() => setFocusCheckoutField(false)}
                      suffixIcon={
                        <div>
                          <img
                            className=""
                            src={
                              checkout || focusCheckoutField
                                ? "/pink-calender-icon.svg"
                                : "/gray-calender-icon.svg"
                            }
                            alt="_checkin"
                          />
                        </div>
                      }
                      prefixCls=""
                      className={`h-[55.97px] rounded-[12px] bg-white datePickerField cursor-pointer border ${
                        focusCheckoutField
                          ? "border-gradientPink "
                          : "border-none"
                      }`}
                      onChange={(e) => setCheckout(e)}
                    />
                  </FormControl>
                </div>
                <FormControl sx={{ my: 1, minWidth: 120 }}>
                  <InputLabel
                    htmlFor="grouped-native-select"
                    className={`ml-[30px] ${
                      adults > 0 ||
                      children > 0 ||
                      infants > 0 ||
                      pets > 0 ||
                      focusGuestField
                        ? "text12px mt-[-12px]"
                        : "text16px"
                    } text-[#747073] selectLabel cursor-pointer`}
                  >
                    My guests
                  </InputLabel>
                  <Popover
                    trigger="click"
                    placement="bottom"
                    title=""
                    content={content}
                    visible={guestPopoverVisible}
                  >
                    <button
                      className={`w-full flex gap-2 py-4 px-4 pr-32 rounded-[12px] bg-white border ${
                        focusGuestField ? "border-gradientPink" : "border-none"
                      }  whitespace-nowrap overflow-hidden`}
                      onClick={() => {
                        setGuestPopoverVisible(!guestPopoverVisible);
                        setFocusGuestField(true);
                      }}
                    >
                      <img
                        src={
                          adults > 0 ||
                          children > 0 ||
                          infants > 0 ||
                          pets > 0 ||
                          focusGuestField
                            ? "/pink-person-icon.svg"
                            : "/gray-person-icon.svg"
                        }
                        alt="_guest"
                      />
                      <span>
                        {adults > 0 && adults + "Adults, "}
                        {children > 0 && children + "Children, "}
                        {infants > 0 && infants + "Infants, "}
                        {pets > 0 && "&" + pets + "Pets"}
                      </span>
                    </button>
                  </Popover>
                </FormControl>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <CommonButton
                buttonTxt="Book Now"
                roundedClass="rounded-full"
                paddingClasses="px-6 py-4"
                widthClasses="w-full"
                onClick={() => console.log("book now Clicked!")}
              />
              <button
                className="border border-[#1F1C1E] rounded-full flex gap-2 justify-center items-center py-4 px-6 w-full bg text-[#1F1C1E] font-Manrope text-sm"
                onClick={handleAddToCart}
              >
                 <img   src="/cart-icon.svg" alt="cart" />
                Add to cart
              </button>
              <p className="text-[#535052] text-Manrope text-xs ">
                You won’t be charged yet
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 pb-4 border-b border-[#EAEAEA]">
                <div className="flex gap-6 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-[#535052] text-sm leading-normal">
                      $229 x 5 nights
                    </p>
                     <img   src="/info-circle-icon.svg" alt="info" />
                  </div>
                  <p className="text-[#1F1C1E] text-sm font-medium leading-normal">
                    $1,145
                  </p>
                </div>
                <div className="flex gap-6 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <p className="text-[#535052] text-sm leading-normal">
                      Airbnb service fee
                    </p>
                     <img   src="/info-circle-icon.svg" alt="info" />
                  </div>
                  <p className="text-[#1F1C1E] text-sm font-medium leading-normal">
                    $1,145
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-between items-center">
                <p className="text-[#1F1C1E] text-sm font-medium leading-normal">
                  Total before taxes
                </p>
                <p className="text-[#1F1C1E] text-sm font-medium leading-normal">
                  $1,307
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        footer={false}
        handleCancel={handleCancelModal}
        title=""
        maxWidth="594px"
        children={
          modalType === "aboutModal" ? (
            <AboutModalContent handleCancelModal={handleCancelModal} />
          ) : (
            <ServiceModalContent handleCancelModal={handleCancelModal} />
          )
        }
      />
    </>
  );
}

export default AboutProduct;
