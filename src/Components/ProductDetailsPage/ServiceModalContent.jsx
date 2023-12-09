// import closeIcon from "../../Assets/close-circle.svg";
// import poolIcon from "../../Assets/pool-icon.svg";
// import dryerIcon from "../../Assets/dryer-icon.svg";
// import shampooIcon from "../../Assets/shampoo-icon.svg";
// import waterIcon from "../../Assets/water-icon.svg";
// import kitchenIcon from "../../Assets/kitchen-icon.svg";
// import parkingIcon from "../../Assets/parking-icon.svg";
// import gymIcon from "../../Assets/gym-icon.svg";
// import workspaceIcon from "../../Assets/workspace-icon.svg";
// import wifiIcon from "../../Assets/wifi-icon.svg";
import Image from 'next/image';

function ServiceModalContent({ handleCancelModal }) {
  const services = [
    {
      name: "Bathroom",
      subServices: [
        { name: "Hair Dryer", img: "/dryer-icon.svg" },
        { name: "Shampoo", img: "/shampoo-icon.svg" },
        { name: "Hot Water", img: "/water-icon.svg" },
      ],
    },
    {
      name: "Kitchen and dining",
      subServices: [{ name: "Kitchen", img: "/kitchen-icon.svg" }],
    },
    {
      name: "Parking and facilities",
      subServices: [
        { name: "Parking", img: "/parking-icon.svg" },
        { name: "Swimming pool", img: "/pool-icon.svg" },
        { name: "Gym", img: "/gym-icon.svg" },
      ],
    },
    {
      name: "Internet and office",
      subServices: [
        { name: "Workplace", img: "/workspace-icon.svg" },
        { name: "Wifi", img: "/wifi-icon.svg" },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 justify-between items-center">
          <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
            Room Services
          </p>
          <img
            src="/close-circle.svg"
            alt="_close"
            className="cursor-pointer"
            onClick={handleCancelModal}
          />
        </div>
        <div className="flex flex-col gap-10 max-h-[728px] overflow-y-scroll">
          <div className="flex flex-col gap-6">
            {services.map((service, index1) => (
              <>
                <p className="text-[#1F1C1E] font-medium text-xl font-Urbanist leading-normal">
                  {service.name}
                </p>
                <div className="flex flex-col gap-3">
                  {service.subServices.map((subService, index2) => (
                    <div
                      className={`w-full flex gap-4 pb-3 ${
                        services[index1].subServices.length - 1 !== index2
                          ? "border-b border-[#E3E1E2]"
                          : ""
                      }`}
                    >
                       <img   src={subService.img} alt="_icon" />
                      <p className="text-[#1F1C1E] font-Manrope leading-normal text-base">
                        {subService.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceModalContent;
