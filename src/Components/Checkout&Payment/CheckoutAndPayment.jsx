import { useState } from "react";
import { Select } from "antd";
import Image from 'next/image';

// import cardIcon from "../../Assets/card-icon.svg";
// import stripeIcon from "../../Assets/stripe-icon.svg";
// import paypalIcon from "../../Assets/paypal-icon.svg";
// import stripeRoundedIcon from "../../Assets/stripe-rounded-icon.svg";
// import paypalRoundedIcon from "../../Assets/paypal-rounded-icon.svg";
// import pricingDetailImg from "../../Assets/pricing-detail-img.png";
// import locationICon from "../../Assets/location-icon.png"  ;
// import starIcon from "../../Assets/star-icon.svg";

import GuestModalContent from "./GuestModalContent";
import DatesModalContent from "./DatesModalContent";
import CommonButton from "../CommonComponents/Button/CommonButton";
import Modal from "../CommonComponents/Modal/CommonModal";

function CheckoutAndPayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedPaymentMethod(value);
  };

  const handleSaveClick = () => {
    console.log("Save Clicked!");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  return (
    <>
      <div className="pt-[143px] pb-16 flex flex-col gap-12 items-center justify-center px-4 md:px-6 lg:px-20 xl:px-32">
        <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-2xl font-medium">
          Checkout & Payment
        </p>
        <div className="flex flex-col-reverse lg:flex-row gap-24 md:gap-20">
          {/* All The Trip Details Section */}
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-6">
              {/* Trip Details */}
              <div className="flex flex-col gap-3">
                <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-lg font-medium">
                  Trip Details
                </p>
                <div className="py-4 px-5 rounded-[20px] bg-[#F9F9F9] flex flex-col gap-4">
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#1F1C1E] font-Manrope text-sm font-medium leading-normal">
                        Date
                      </p>
                      <p className="text-[#535052] font-Manrope text-sm  leading-normal">
                        {checkin} - {checkout}
                      </p>
                    </div>
                    <p
                      onClick={() => handleModalOpen("dateModal")}
                      className="text-[#1F1C1E] font-Manrope text-sm font-medium leading-normal underline cursor-pointer"
                    >
                      Edit
                    </p>
                  </div>
                  <div className="flex gap-6 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#1F1C1E] font-Manrope text-sm font-medium leading-normal">
                        Guests
                      </p>
                      <p className="text-[#535052] font-Manrope text-sm  leading-normal">
                        {adults > 0 && adults + "Adults, "}
                        {children > 0 && children + "Children, "}
                        {infants > 0 && infants + "Infants, "}
                        {pets > 0 && "&" + pets + "Pets"}
                      </p>
                    </div>
                    <p
                      onClick={() => handleModalOpen("guestModal")}
                      className="text-[#1F1C1E] font-Manrope text-sm font-medium leading-normal underline cursor-pointer"
                    >
                      Edit
                    </p>
                  </div>
                </div>
              </div>
              {/* Payment Method */}
              <div className="flex flex-col gap-3">
                <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-lg font-medium">
                  Choose Payment Method
                </p>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Select
                      className="checkoutSelect"
                      defaultValue=""
                      onChange={handleChange}
                      options={[
                        {
                          value: "",
                          label: (
                            <div className="flex gap-3 items-center">
                               <img   src="/card-icon.svg" alt="_select" />
                              <p className="text-[#747073] font-Manrope text-sm leading-normal">
                                Select
                              </p>
                            </div>
                          ),
                        },
                        {
                          value: "stripe",
                          label: (
                            <div className="flex gap-3 items-center">
                               <img   src="/stripe-icon.svg" alt="_stripe" />
                              <p className="text-[#747073] font-Manrope text-sm leading-normal">
                                Stripe
                              </p>
                            </div>
                          ),
                        },
                        {
                          value: "paypal",
                          label: (
                            <div className="flex gap-3 items-center">
                               <img   src="/paypal-icon.svg" alt="_paypal" />
                              <p className="text-[#747073] font-Manrope text-sm leading-normal">
                                Paypal
                              </p>
                            </div>
                          ),
                        },
                      ]}
                    />
                    <p className="text-[#747073] text-xs">
                      Log in to use Paypal
                    </p>
                  </div>
                  {selectedPaymentMethod !== "" && (
                    <img
                      width="100px"
                      src={
                        selectedPaymentMethod === "paypal"
                          ? "/paypal-rounded-icon.svg"
                          : "/stripe-rounded-icon.svg"
                      }
                      alt="_paymentMethod"
                    />
                  )}
                </div>
              </div>
              {/* Cancellation Policy */}
              <div className="flex flex-col gap-3">
                <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-lg font-medium">
                  Cancellation Policy
                </p>
                <div className="flex gap-1 text-[#1F1C1E] font-Manrope text-sm leading-normal">
                  This reservation is non-refundable.
                  <span className="font-medium underline cursor-pointer">
                    Learn more
                  </span>
                </div>
              </div>
              {/* Ground Rules */}
              <div className="flex flex-col gap-3">
                <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-lg font-medium">
                  Ground Rules
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-[#1F1C1E] font-Manrope text-sm leading-normal">
                    We advise each guest to keep in mind a few fundamental
                    principles of what makes a wonderful guest.
                  </p>
                  <div className="flex flex-col gap1">
                    <p className="text-[#1F1C1E] font-Manrope text-sm leading-normal">
                      • Follow the house rules
                    </p>
                    <p className="text-[#1F1C1E] font-Manrope text-sm leading-normal">
                      • Treat your Host’s home like your own
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Save Btn */}
            <CommonButton
              buttonTxt="Save"
              roundedClass="rounded-full"
              paddingClasses="px-auto md:px-40 py-4"
              widthClasses="w-full"
              onClick={handleSaveClick}
            />
          </div>

          {/* Pricing Details Section */}
          <div className="p-6 rounded-2xl border border-[#EDEDED] flex flex-col gap-5 h-fit">
            <p className="text-[#1F1C1E] font-Urbanist text-xl font-medium leading-normal">
              Pricing details
            </p>
            {/* Place Detail */}
            <div className="flex gap-4">
              <img
                src="/pricing-detail-img.png"
                alt="_place"
                className="w-[160px] h-[93px] rounded-[10px]"
              />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <p className="text-[#1F1C1E] font-Manrope text-lg font-medium leading-normal">
                    Vintage Airstream Suite on Top of a Hill
                  </p>
                  <div className="flex gap-2 items-center">
                     <img   src="/location-icon.svg" alt="_location" />
                    <p className="text-[#535052] font-Manrope text-sm leading-normal">
                      Calaca, Calabarzon, Philippines
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                     <img   src="/star-icon.svg"   alt="_rating" />
                    <div className="flex gap-2 text-[#1F1C1E] font-Manrope text-sm leading-normal">
                      <span className="font-medium">4.8</span>
                      <span className="text-[#747073]">(230 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipet */}
            <div className="pt-4 flex flex-col gap-4 border-t border-[#EAEAEA]">
              <div className="flex gap-6 justify-between items-center pb-4 border-b border-[#EAEAEA]">
                <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                  Category
                </p>
                <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                  Place
                </p>
              </div>
              <div className="flex flex-col gap-3 pb-4 border-b border-[#EAEAEA]">
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-[#535052] text-sm font-Manrope leading-normal">
                    $229 x 5 nights
                  </p>
                  <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                    $1,145
                  </p>
                </div>
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-[#535052] text-sm font-Manrope leading-normal underline cursor-pointer">
                    Cleaning fee
                  </p>
                  <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                    $10.00
                  </p>
                </div>
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-[#535052] text-sm font-Manrope leading-normal underline cursor-pointer">
                    Service fee
                  </p>
                  <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                    $16.31
                  </p>
                </div>
                <div className="flex gap-6 justify-between items-center">
                  <p className="text-[#535052] text-sm font-Manrope leading-normal underline cursor-pointer">
                    Occupancy taxes and fees
                  </p>
                  <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                    $11.45
                  </p>
                </div>
              </div>
              <div className="flex gap-6 justify-between items-center">
                <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                  Total (USD)
                </p>
                <p className="text-[#1F1C1E] font-medium text-sm font-Manrope leading-normal">
                  $136,76
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        footer={false}
        handleCancel={handleCloseModal}
        title=""
        width={modalType === "guestModal" ? "400px" : "776px"}
        maxWidth="594px"
        children={
          modalType === "guestModal" ? (
            <GuestModalContent
              children={children}
              adults={adults}
              infants={infants}
              pets={pets}
              setAdults={setAdults}
              setChildren={setChildren}
              setInfants={setInfants}
              setPets={setPets}
              handleCloseModal={handleCloseModal}
            />
          ) : (
            <DatesModalContent
              setCheckin={setCheckin}
              setCheckout={setCheckout}
              handleCloseModal={handleCloseModal}
              setIsModalOpen={setIsModalOpen}
              checkin={checkin}
              checkout={checkout}
            />
          )
        }
      />
    </>
  );
}

export default CheckoutAndPayment;
