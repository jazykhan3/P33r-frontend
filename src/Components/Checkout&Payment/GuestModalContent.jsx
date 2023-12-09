/* eslint-disable default-case */
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
// import closeIcon from "../../Assets/close-circle.svg";
// import pinkPersonIcon from "../../Assets/pink-person-icon.svg";
// import grayPersonIcon from "../../Assets/gray-person-icon.svg";

function GuestModalContent({
  children,
  adults,
  infants,
  pets,
  setAdults,
  setChildren,
  setInfants,
  setPets,
  handleCloseModal,
}) {
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

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-start items-center">
          <img
            onClick={handleCloseModal}
            src="/close-circle.svg"
            alt="_close"
            className="cursor-pointer"
          />
        </div>
        <FormControl sx={{ my: 1, minWidth: 120 }}>
          <InputLabel
            htmlFor="grouped-native-select"
            className={`ml-[30px] ${
              adults > 0 || children > 0 || infants > 0 || pets > 0
                ? "text12px mt-[-12px]"
                : "text16px"
            } text-[#747073] selectLabel cursor-pointer`}
          >
            My guests
          </InputLabel>
          <button
            className={`w-full flex gap-2 py-4 px-4 pr-32 rounded-[12px] bg-white border ${
              adults > 0 || children > 0 || infants > 0 || pets > 0
                ? "border-gradientPink"
                : "border-[#E3E1E2]"
            }  whitespace-nowrap overflow-hidden`}
          >
            <img
              src={
                adults > 0 || children > 0 || infants > 0 || pets > 0
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
        </FormControl>

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
            This place has a maximum of 6 guests, not including infants. Pets
            aren’t allowed
          </p>
          <div
            className="flex justify-end items-center underline text-sm cursor-pointer"
            onClick={handleCloseModal}
          >
            Close
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestModalContent;
