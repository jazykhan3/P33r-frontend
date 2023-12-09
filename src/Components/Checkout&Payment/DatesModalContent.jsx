/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Calendar } from "antd";
// import grayCalenderIcon from "../../Assets/gray-calender-icon.svg";
// import pinkCalenderIcon from "../../Assets/pink-calender-icon.svg";
// import closeIcon from "../../Assets/close-circle.svg";

function DatesModalContent({
  setCheckin,
  setCheckout,
  handleCloseModal,
  setIsModalOpen,
  checkin,
  checkout,
}) {
  const [localCheckin, setLocalCheckin] = useState(null);
  const [localCheckout, setLocalCheckout] = useState(null);

  useEffect(() => {
    setLocalCheckin(checkin);
    setLocalCheckout(checkout);
  }, []);

  const extractDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "2-digit", year: "numeric" };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const handleDateChange = (event, type) => {
    let date = extractDate(event.$d);
    type === "checkin" ? setLocalCheckin(date) : setLocalCheckout(date);
  };

  const handleCleanDates = () => {
    setLocalCheckin(null);
    setLocalCheckout(null);
  };

  const handleSave = () => {
    setCheckin(localCheckin);
    setCheckout(localCheckout);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-start items-center">
          <img
            onClick={handleCloseModal}
            src="/close-circle.svg"
            alt="_close"
            className="cursor-pointer"
          />
        </div>
        <div className="flex gap-6 justify-between items-center flex-wrap">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
              Select Dates
            </p>
            <p className="text-[#747073] text-sm font-Manrope leading-normal">
              Add your travel dates for exact pricing
            </p>
          </div>
          <div className="flex gap-1 flex-wrap">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="grouped-native-select"
                className={`ml-[30px] ${
                  localCheckin ? "text12px mt-[-12px]" : "text16px"
                } text-[#747073] selectLabel`}
              >
                Check in
              </InputLabel>
              <button
                className={`min-w-[148px] w-full flex gap-2 py-4 px-4 rounded-[12px] bg-white border ${
                  localCheckin ? "border-gradientPink" : "border-[#E3E1E2]"
                }  whitespace-nowrap overflow-hidden`}
              >
                <img
                  src={localCheckin ? "/pink-calender-icon.svg" : "/gray-calender-icon.svg"}
                  alt="_guest"
                />
                <span>{localCheckin}</span>
              </button>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="grouped-native-select"
                className={`ml-[30px] ${
                  localCheckout ? "text12px mt-[-12px]" : "text16px"
                } text-[#747073] selectLabel`}
              >
                Check out
              </InputLabel>
              <button
                className={`min-w-[148px] w-full flex gap-2 py-4 px-4 rounded-[12px] bg-white border ${
                  localCheckout ? "border-gradientPink" : "border-[#E3E1E2]"
                }  whitespace-nowrap overflow-hidden`}
              >
                <img
                  src={localCheckout ? "/pink-calender-icon.svg" : "/gray-calender-icon.svg"}
                  alt="_guest"
                />
                <span>{localCheckout}</span>
              </button>
            </FormControl>
          </div>

          {/* Calendar */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-8">
              <Calendar
                fullscreen={false}
                onChange={(e) => handleDateChange(e, "checkin")}
              />
              <Calendar
                fullscreen={false}
                onChange={(e) => handleDateChange(e, "checkout")}
              />
            </div>
            <div className="flex justify-end items-center">
              <div className="flex gap-4 items-center">
                <p
                  onClick={handleCleanDates}
                  className="underline text-[#535052] font-Manrope text-sm leading-normal font-medium cursor-pointer"
                >
                  Clean dates
                </p>
                <button
                  onClick={handleSave}
                  className="text-white bg-[#535052] rounded-lg py-2 px-4 text-sm font-Manrope font-medium leading-normal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DatesModalContent;
