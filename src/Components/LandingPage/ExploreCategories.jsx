import React, { useRef, useState } from 'react';
import Image from 'next/image';

// import exploreImg1 from '../../Assets/exploreImg1.png'
// import exploreImg2 from '../../Assets/exploreImg2.png'
// import exploreImg3 from '../../Assets/exploreImg3.png'
// import exploreImg4 from '../../Assets/exploreImg4.png'
// import exploreImg5 from '../../Assets/exploreImg5.png'
// import exploreImg6 from '../../Assets/exploreImg6.png'
// import exploreImg7 from '../../Assets/exploreImg7.png'
// import rightArrowBlack from '../../Assets/right-arrow-black.svg';
// import rightArrowPink from '../../Assets/right-arrow-pink.svg';
// import leftArrowBlack from '../../Assets/left-arrow-black.svg';
// import leftArrowPink from '../../Assets/left-arrow-pink.svg';

function ExploreCategories() {
  const scrollContainer = useRef(null);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);

  const categories = [
    {
      img: "/exploreImg1.png",
      name: "Townhouse"
    },
    {
      img: "/exploreImg2.png",
      name: "Apartment"
    },
    {
      img: "/exploreImg3.png",
      name: "Cabin"
    },
    {
      img: "/exploreImg4.png",
      name: "Tent"
    },
    {
      img: "/exploreImg5.png",
      name: "Condominium"
    },
    {
      img: "/exploreImg6.png",
      name: "Tiny House"
    },
    {
      img: "/exploreImg7.png",
      name: "Bungalow"
    },
    {
      img: "/exploreImg1.png",
      name: "Townhouse"
    },
    {
      img: "/exploreImg2.png",
      name: "Apartment"
    },
    {
      img: "/exploreImg3.png",
      name: "Cabin"
    },
    {
      img: "/exploreImg4.png",
      name: "Tent"
    },
    {
      img: "/exploreImg5.png",
      name: "Condominium"
    },
    {
      img: "/exploreImg6.png",
      name: "Tiny House"
    },
    {
      img: "/exploreImg7.png",
      name: "Bungalow"
    },
  ]

  const handleScroll = (type) => {
    if (scrollContainer.current) {
      type === "left" ? scrollContainer.current.scrollLeft -= 100 : scrollContainer.current.scrollLeft += 100
    }
  };

  return (<>
    <div className=" pt-20 pb-32 flex flex-col gap-20 justify-center items-center">
      <p className="px-4 md:px-6 text-[#212674] font-manrope text-[44px] font-bold">Explore Categories</p>
      <div className='flex justify-center items-center w-full'>
        <div className='w-20 h-[140.5px] flex justify-start items-center bg-gradient-to-r from-white to-transparent mr-[-79px] z-10 mt-[1px]'>
          <div onClick={() => handleScroll('left')} onMouseEnter={() => setLeftHover(true)} onMouseLeave={() => setLeftHover(false)} className={`flex p-2 rounded-full border cursor-pointer ${leftHover ? "border-[#C75D9C]" : "border-[#000]"} shadow-md bg-white`}>
             <img src={leftHover ? "/left-arrow-pink.svg" : "/left-arrow-black.svg"} alt="_left" className='cursor-pointer w-3' />
          </div>
        </div>
        <div className="flex gap-6 max-w-[1124px] w-[99%] h-[140px] overflow-x-scroll noScrollBar" ref={scrollContainer}>
          {categories?.map((item, index) => (
            <div key={index} className='min-w-[140px]'>
               <img src={item.img} alt="_explore" className='rounded-lg' height="140" width="140" />
              <p className="text-white text-center font-manrope text-base mt-[-35px]">{item?.name}</p>
            </div>
          ))}
        </div>
        <div className='w-20 h-[140.5px] flex justify-end items-center bg-gradient-to-l from-white to-transparent ml-[-79px] mt-[1px]'>
          <div onClick={() => handleScroll('right')} className={`flex p-2 pl-3 pr-[10px] rounded-full border ${rightHover ? "border-[#C75D9C]" : "border-[#000]"} cursor-pointer shadow-md bg-white`} onMouseEnter={() => setRightHover(true)} onMouseLeave={() => setRightHover(false)}>
             <img src={rightHover ? "/right-arrow-pink.svg" : "/right-arrow-black.svg"} alt="_right" className='cursor-pointer w-[6px]' />
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default ExploreCategories;