import { useRef } from 'react';
import Image from 'next/image';
import leftArrow from '../../Assets/listing-left-arrow.svg';
import rightArrow from '../../Assets/listing-right-arrow.svg';
import commaIcon from '../../Assets/comma-icon.svg';
import clientImg1 from '../../Assets/client-img-1.svg';
import clientImg2 from '../../Assets/client-img-2.svg';
import clientImg3 from '../../Assets/client-img-3.svg';
// import serviceBg from './service-bg.svg';
import serviceImg from '../../Assets/service-img.svg';
// import appleBtn from '../../Assets/apple-btn.png';
// import playstoreBtn from '../../Assets/playstore-btn.png';

function Review() {
    const scrollContainer = useRef(null);

    const reviews = [
        {
            name: "Michael",
            date: "June 2022",
            review: "We had a beautiful stay in Palazzo Rosso. Everything was like described, even better. The hosts are very kind and open for any help. We are sure we will come back.",
            img: "/client-img-1.svg",
        },
        {
            name: "Lisa",
            date: "April 2022",
            review: "Heaven on earth: here you have everything you could wish for and more. Loved the hottub, sauna, pool, BBQ, bikes and games. And our toddlers loved the animals and running around freely (as everything is constructed safely for them). And all that for a very reasonable price. The owners have been very helpful with recommendations and are always available.",
            img: "/client-img-2.svg",
        },
        {
            name: "Agne",
            date: "April 2022",
            review: "It is a lovely farm with friendly animals (which was the main attraction for me). The hosts are lovely and helpful. The location is very private and quiet.It is important to have a car as a lot of attractions are distant from the location, however, this was not an issue for my stay.",
            img: "/client-img-3.svg",
        },
        {
            name: "Michael",
            date: "June 2022",
            review: "We had a beautiful stay in Palazzo Rosso. Everything was like described, even better. The hosts are very kind and open for any help. We are sure we will come back.",
            img: "/client-img-1.svg",
        },
        {
            name: "Lisa",
            date: "April 2022",
            review: "Heaven on earth: here you have everything you could wish for and more. Loved the hottub, sauna, pool, BBQ, bikes and games. And our toddlers loved the animals and running around freely (as everything is constructed safely for them). And all that for a very reasonable price. The owners have been very helpful with recommendations and are always available.",
            img: "/client-img-2.svg",
        },
        {
            name: "Agne",
            date: "April 2022",
            review: "It is a lovely farm with friendly animals (which was the main attraction for me). The hosts are lovely and helpful. The location is very private and quiet.It is important to have a car as a lot of attractions are distant from the location, however, this was not an issue for my stay.",
            img: "/client-img-3.svg",
        },
    ]

    const handleScroll = (type) => {
        if (scrollContainer.current) {
            type === "left" ? scrollContainer.current.scrollLeft -= 100 : scrollContainer.current.scrollLeft += 100
        }
    };
    return (<>
        <div className="px-4 md:px-32 flex flex-col justify-center items-center gap-32 py-32">
            <div className="flex flex-col gap-12 justify-center items-center w-full">
                <div className=" flex gap-6 justify-between items-center w-full">
                    <p className="text-[#212674] font-manrope text-[44px] font-bold">PEER Review</p>
                    <div className="flex gap-6">
                        <img onClick={() => handleScroll('left')} src="/listing-left-arrow.svg" alt="_left" className='cursor-pointer'/>
                        <img onClick={() => handleScroll('right')} src="/listing-right-arrow.svg" alt="_right" className='cursor-pointer'/>
                    </div>
                </div>
                <div className='flex gap-6 overflow-x-scroll noScrollBar w-full' ref={scrollContainer}>
                    {reviews.map((review, index) => (
                        <div key={index} className='w-[358px] h-fit rounded-[20px] border border-[#E3E1E2] p-6 flex flex-col gap-5'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex gap-4'>
                                    <img src={review.img} alt="_client" className='rounded-full' />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-[#1F1C1E] font-manrope text-lg font-bold'>{review.name}</p>
                                        <p className='text-[#535052] font-manrope text-sm font-normal'>{review.date}</p>
                                    </div>
                                </div>
                                <p className='text-[#747073] font-manrope text-base font-normal leading-6 w-[308px]'>{review.review}</p>
                            </div>
                            <div className='flex justify-end items-center'>
                                <img src="/comma-icon.svg" alt="_comma" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col xl:flex-row gap-6 xl:gap-32 px-6 md:px-24 pt-16 bg-no-repeat bg-cover rounded-[60px]' style={{ backgroundImage: `url(/service-bg.svg)` }}>
                    <div className='flex flex-col gap-10 pb-16'>
                        <div className='flex flex-col gap-3 max-w-[447px]'>
                            <p className='text-white font-manrope text-[44px] font-bold leading-normal'>Get our services very easily</p>
                            <p className='text-white font-manrope text-base font-medium leading-normal'>We highly appreciate the quality of Infermedica technology, ease of deployment and the outstanding ability to</p>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                            <img   src="/apple-btn.png" alt="_apple" />
                            <img   src="/playstore-btn.png" alt="_playstore" />
                        </div>
                    </div>
                    <img src="/service-img.svg" alt="_service" />
                </div>
            </div>
        </div>
    </>)
}

export default Review;