// import closeIcon from "../../Assets/close-circle.svg";

function AboutModalContent({ handleCancelModal }) {
  const locationData = [
    {
      about:
        "Newly renovated private room, on the 2nd floor with Ombra Caffe No.3 downstair. It is close to the main road so transportation is so convenient.The room was decorated with warm natural touch. Comfortable large usable area. There are b Bedrooms and bathrooms within. Big balcony and kitchen is available. There is also living area that you can spent time together with your happy family or lovely friends.",
      numberOfGuests: "** Maximum for 6 guests **",
      space: [
        " 10-15 minutes from the airport by taxi/Song taew (local red car)",
        "10 minutes by walk to Nimmanhemin Road with lots of different shops, trendy cafes, restaurants, and bars",
        "10 minutes by walk to One Nimman and Think Park",
        "10 minutes by car to The Old City of Chiang",
      ],
      convenientSpot: [
        " Ombra Caffe No.3 downstair for co-working open daily 8-6 pmclose every Sunday",
        "Ombra x the Bar downstair open Thursday-Sunday 6-10pm",
        " 7-11",
        "Tesco Lotus",
        "Restaurants and street food vendors around",
        "Pharmacy",
        "Gas station",
        "Motor bike rental",
        " Grocery store",
        "Opposite to coin operated washer/dryer",
      ],
      extra: "CAR PARKING: Can park in front of the building",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 justify-between items-center">
          <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
            About this place
          </p>
          <img
            src="/close-circle.svg"
            alt="_close"
            className="cursor-pointer"
            onClick={handleCancelModal}
          />
        </div>
        <div className="flex flex-col gap-5 max-h-[728px] overflow-y-scroll">
          {locationData.map((item, index) => (
            <div key={index}>
              <p className="text-[#535052] font-Manrope text-base leading-normal">
                {item.about}
              </p>
              <p className="text-[#535052] font-Manrope text-base leading-normal">
                {item.numberOfGuests}
              </p>
              <div className="flex flex-col">
                <p className="text-[#535052] font-Manrope text-base leading-normal font-medium">
                  The space
                </p>
                <ul>
                  {item.space.map((space) => (
                    <li className="text-[#535052] font-Manrope text-base leading-normal">
                      • {space}
                    </li>
                  ))}
                </ul>
                <p className="text-[#535052] font-Manrope text-base leading-normal">
                  Mai which offers famous attractions like the Sunday night
                  market and important temples.
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[#535052] font-Manrope text-base leading-normal">
                  another convenient spot by walk:
                </p>
                <ul>
                  {item.convenientSpot.map((spot) => (
                    <li className="text-[#535052] font-Manrope text-base leading-normal">
                      • {spot}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#535052] font-Manrope text-base leading-normal">
                {item.extra}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutModalContent;
