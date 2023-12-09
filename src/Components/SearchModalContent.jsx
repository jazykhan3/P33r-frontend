/* eslint-disable default-case */
import { useState } from "react";
// import searchCategoryImg1 from "../Assets/search-category-img-1.png";
// import searchCategoryImg2 from "../Assets/search-category-img-2.png";
// import searchCategoryImg3 from "../Assets/search-category-img-3.png";
// import searchCategoryImg4 from "../Assets/search-category-img-4.png";
// import searchCategoryImg5 from "../Assets/search-category-img-5.png";
// import searchCategoryImg6 from "../Assets/search-category-img-6.png";
// import graySearchIcon from "../Assets/gray-search-icon.svg";
// import pinkSearchIcon from "../Assets/pink-search-icon.svg";
// import grayCalenderIcon from "../Assets/gray-calender-icon.svg";
// import pinkCalenderIcon from "../Assets/pink-calender-icon.svg";
// import grayPersonIcon from "../Assets/gray-person-icon.svg";
// import pinkPersonIcon from "../Assets/pink-person-icon.svg";
import { DatePicker } from "antd";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CommonButton from "./CommonComponents/Button/CommonButton";
import { Popover } from "antd";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    "& .MuiFilledInput-root": {
      backgroundColor: "#F9F9F9",
    },
    "& .MuiFilledInput-root:hover": {
      backgroundColor: "#F9F9F9",
      "@media (hover: none)": {
        backgroundColor: "#F9F9F9",
      },
    },
    "& .MuiFilledInput-root.Mui-focused": {
      backgroundColor: "#F9F9F9",
    },
  },
}));

function SearchModalContent({
  setGuestPopoverVisible,
  guestPopoverVisible,
  setIsSearchModalOpen,
}) {
  const router = useRouter();
  // const navigate = useNavigate();
  const classes = useStyles();
  const [focusSearchField, setFocusSearchField] = useState(false);
  const [location, setLocation] = useState(null);
  const [focusCheckinField, setFocusCheckinField] = useState(false);
  const [checkin, setCheckin] = useState(null);
  const [focusCheckoutField, setFocusCheckoutField] = useState(false);
  const [focusGuestField, setFocusGuestField] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [checkout, setCheckout] = useState(null);
  const [hoverId, setHoverId] = useState("");

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

  const handleCloseGuestPopover = () => {
    setGuestPopoverVisible(false);
    setFocusGuestField(false);
  };

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

  const content = (
    <div className="flex flex-col gap-4">
      <div className="p-6 flex flex-col gap-5">
        {guestsDropdownContent.map((item, index) => (
          <div key={index} className="flex gap-24 justify-between items-center flex-wrap">
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
      <div
        className="flex justify-end items-center underline text-sm cursor-pointer"
        onClick={handleCloseGuestPopover}
      >
        Close
      </div>
    </div>
  );

  const categories = [
    {
      id: 1,
      img: "/search-category-img-1.png",
      name: "Places",
    },
    {
      id: 2,
      img: "/search-category-img-2.png",
      name: "Vehicles",
    },
    {
      id: 3,
      img: "/search-category-img-3.png",
      name: "Clothing",
    },
    {
      id: 4,
      img: "/search-category-img-4.png",
      name: "Boats",
    },
    {
      id: 5,
      img: "/search-category-img-5.png",
      name: "Tools",
    },
    {
      id: 6,
      img: "/search-category-img-6.png",
      name: "Camera",
    },
    {
      id: 7,
      img: "/search-category-img-1.png",
      name: "Places",
    },
    {
      id: 8,
      img: "/search-category-img-1.png",
      name: "Places",
    },
    {
      id: 9,
      img: "/search-category-img-2.png",
      name: "Vehicles",
    },
    {
      id: 10,
      img: "/search-category-img-3.png",
      name: "Clothing",
    },
    {
      id: 11,
      img: "/search-category-img-4.png",
      name: "Boats",
    },
    {
      id: 12,
      img: "/search-category-img-5.png",
      name: "Tools",
    },
    {
      id: 13,
      img: "/search-category-img-6.png",
      name: "Camera",
    },
    {
      id: 14,
      img: "/search-category-img-1.png",
      name: "Places",
    },
  ];

  const handleSearchClick = () => {
    setIsSearchModalOpen(false);
    setGuestPopoverVisible(false);
    // navigate("/search");
    router.push("/search");
  };

  return (
    <>
      <div className="flex flex-col gap-12 justify-center items-center">
        <h2 className="text-black text-center font-Manrope text-2xl font-bold">
          Choose Your Category
        </h2>
        <div className="flex flex-col gap-16 w-full">
          <div className="flex gap-6 max-w-[1016px]  h-[160px] overflow-x-scroll noScrollBar">
            {categories?.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-[20px] min-w-[140px]"
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId("")}
              >
                <img
                   
                  src={item.img}
                  alt="_explore"
                  className={` rounded-[20px] w-[140px] h-[140px] border ${
                    hoverId === item.id
                      ? "border-gradientPink shadow-[0_10px_16px_0px_rgba(131,38,93,0.31)]"
                      : "border-[#F0F0F0]"
                  }`}
                />
                <p className="text-white text-center font-manrope text-base mt-[-35px]">
                  {item?.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap flex-col md:flex-row">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="grouped-native-select"
                className={`ml-[30px] ${
                  focusSearchField || location ? "mt-4" : "mt-[26px] text22px"
                } text-[#747073] selectLabel`}
              >
                Search place
              </InputLabel>
              <Select
                onChange={(e) => setLocation(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      src={
                        focusSearchField || location
                          ? "/pink-search-icon.svg"
                          : "/gray-search-icon.svg"
                      }
                      alt="_search"
                    />
                  </InputAdornment>
                }
                className={` bg-[#f8f8f9] ${classes.root} selectField border ${
                  focusSearchField || location
                    ? "border-gradientPink"
                    : "border-[#E3E1E2]"
                }`}
                onFocus={() => setFocusSearchField(true)}
                onBlur={() => setFocusSearchField(false)}
                native
                defaultValue=""
                id="grouped-native-select"
                label="Search place"
                variant="filled"
              >
                <option className="p-4 bg-white" aria-label="None" value="" />
                <option className="p-4 bg-white" value={1}>
                  I’m flexible
                </option>
                <optgroup label="Popular">
                  <option className="p-4 bg-white" value={2}>
                    Denver, Colorado, USA
                  </option>
                  <option className="p-4 bg-white" value={3}>
                    Denver, Colorado, USA
                  </option>
                  <option className="p-4 bg-white" value={4}>
                    Albuquerque, New Mexico, USA
                  </option>
                  <option className="p-4 bg-white" value={5}>
                    Kansas City, Missouri, USA
                  </option>
                </optgroup>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="grouped-native-select"
                className={`ml-[30px] ${
                  checkin || focusCheckinField
                    ? "text12px mt-[-12px]"
                    : "text16px"
                } text-[#747073] selectLabel`}
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
                className={`h-[55.97px] rounded-[12px] bg-[#f8f8f9] datePickerField border ${
                  checkin || focusCheckinField
                    ? "border-gradientPink "
                    : "border-[#E3E1E2]"
                }`}
                onChange={(e) => setCheckin(e)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="grouped-native-select"
                className={`ml-[30px] ${
                  checkout || focusCheckoutField
                    ? "text12px mt-[-12px]"
                    : "text16px"
                } text-[#747073] selectLabel`}
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
                className={`h-[55.97px] rounded-[12px] bg-[#f8f8f9] datePickerField border ${
                  checkout || focusCheckoutField
                    ? "border-gradientPink "
                    : "border-[#E3E1E2]"
                }`}
                onChange={(e) => setCheckout(e)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                } text-[#747073] selectLabel`}
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
                  className={`w-full flex gap-2 py-4 px-4 pr-32 rounded-[12px] bg-[#F9F9F9] border ${
                    adults > 0 ||
                    children > 0 ||
                    infants > 0 ||
                    pets > 0 ||
                    focusGuestField
                      ? "border-gradientPink"
                      : "border-[#E3E1E2]"
                  } md:max-w-[180px] whitespace-nowrap overflow-hidden`}
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
        <CommonButton
          buttonTxt="Search"
          roundedClass="rounded-full"
          paddingClasses="px-auto md:px-40 py-4"
          widthClasses="w-full md:w-fit"
          onClick={handleSearchClick}
        />
      </div>
    </>
  );
}

export default SearchModalContent;
