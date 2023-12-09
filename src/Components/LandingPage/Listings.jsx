import { useState } from "react";
import Image from 'next/image';

// import listingImg from "../../Assets/listing-img.png";
// import pinkHeart from "../../Assets/pink-heart.svg";
// import whiteHeart from "../../Assets/white-heart.svg";
// import actionbtn from "../../Assets/listing-action-btn.svg";
// import rightArrow from "../../Assets/listing-right-arrow.svg";
// import leftArrow from "../../Assets/listing-left-arrow.svg";
// import startIcon from "../../Assets/star-icon.svg";
// import shareIcon from "../../Assets/share-icon.svg";
import CommonButton from "../CommonComponents/Button/CommonButton";
import { Dropdown } from "antd";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

function Listings() {
  const router = useRouter();
  // const navigate = useNavigate();
  const cardsData = [
    {
      id: 1,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
    {
      id: 2,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
    {
      id: 3,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
    {
      id: 4,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
    {
      id: 5,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
    {
      id: 6,
      location: "Holbrook, Arizona, US",
      state: "Calaca, Calabarzon, Philippines",
      date: "May 4 - 5",
      price: "95",
      rating: "4.8 (230)",
      fav: false,
    },
  ];
  const items = [
    {
      key: "1",
      label: (
        <div className="flex gap-2 items-center justify-center">
           <img   src="/share-icon.svg" alt="_share" />
          <p className="text-[#1F1C1E] font-manrope text-sm font-semibold leading-normal">
            Share social media
          </p>
        </div>
      ),
    },
  ];

  const [cards, setCards] = useState(cardsData);

  const handleBookNow = () => {
    Router.push("/productDetail");
  };

  const handleLike = (id) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, fav: !card.fav };
      }
      return card;
    });
    setCards(updatedCards);
  };
  return (
    <>
      <div className="px-4 md:px-6 flex flex-col gap-10">
        <div className="flex flex-col gap-20 justify-center items-center">
          <p className="text-[#212674] font-manrope text-[44px] font-bold">
            Featured Listings
          </p>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {cards.map((card, index) => (
              <div key={index} className="p-2 pb-4 rounded-2xl border border-[#EAEAEA]">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col pt-2">
                    <div className="flex gap-3 justify-end mb-[-40px] z-10 mr-3">
                      <img
                        src={card.fav ? "/pink-heart.svg" : "/white-heart.svg"}
                        alt="_fav"
                        onClick={() => handleLike(card.id)}
                        className="cursor-pointer"
                      />
                      <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                        <img
                          src="/listing-action-btn.svg"
                          alt="_action"
                          className="cursor-pointer"
                        />
                      </Dropdown>
                    </div>
                     <img   src="/listing-img.png" alt="listing"   />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-6 justify-between items-start">
                      <div className="flex flex-col gap-2">
                        <p className="text-[#1F1C1E] font-manrope text-lg font-bold">
                          {card.location}
                        </p>
                        <p className="text-[#747073] font-manrope text-sm ">
                          {card.state}
                        </p>
                        <p className="text-[#747073] font-manrope text-sm ">
                          {card.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                         <img   src="/star-icon.svg"   alt="_rate" />
                        <p className="text-[#1F1C1E] font-manrope text-sm font-medium">
                          {card.rating}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-center justify-between">
                      <p className="flex gap-2 justify-center items-center">
                        <span className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent font-manrope font-base font-bold">
                          ${card.price}
                        </span>
                        <span className="text-center font-manrope text-xs text-[#1F1C1E]">
                          night
                        </span>
                      </p>
                      <CommonButton
                        roundedClass="rounded-full"
                        buttonTxt="Book Now"
                        widthClasses="w-fit"
                        onClick={handleBookNow}
                        paddingClasses="py-3 px-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
           <img src="/listing-left-arrow.svg" alt="_left" className="cursor-pointer" />
           <img src="/listing-right-arrow.svg" alt="_right" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Listings;
