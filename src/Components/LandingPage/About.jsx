// import aboutImg1 from '../../Assets/about-img-1.png';
// import aboutImg2 from '../../Assets/about-img-2.png';
// import aboutImg3 from '../../Assets/about-img-3.png';
// import aboutBg from '../../Assets/about-bg.png';
// import appleBtn from '../../Assets/apple-btn.png';
// import playstoreBtn from '../../Assets/playstore-btn.png';
import Image from 'next/image';

function About() {
    return (<>
        <div className="px-4 md:px-6 flex flex-col gap-32 py-32">
            <div className="flex flex-col gap-12 justify-center items-center">
                <p className="text-[#212674] font-manrope text-[44px] font-bold">About us</p>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
                        <p className='text-[#1F1C1E] font-manrope text-3xl font-medium max-w-[480px]'>Our vision is to pave the way for
                            the future of online seamless
                            rentals, enriching people's lives
                            around the world with safe and
                            fully insured rentals</p>
                        <div className="flex gap-6 flex-col md:flex-row lg:flex-col xl:flex-row">
                             <img    src="/about-img-1.png" alt="_about" />
                             <img    src="/about-img-2.png" alt="_about" />
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0'>
                             <img    src="/about-img-3.png" alt="_about" className='md:w-[500px] md:h-[600px] lg:w-auto lg:h-auto' />
                            <div className='py-16 px-12 rounded-2xl shadow-md flex flex-col gap-5 md:ml-[-200px] bg-white max-w-[734px]'>
                                <p className='text-[#1F1C1E] font-Manrope text-[32px] font-extrabold leading-normal'>Sustainable Sharing</p>
                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#1F1C1E] font-Archivo text-[20px] font-normal leading-[34px]'>We are a peer-to-peer lending and renting platform that connects individuals who own underused items with people who need them temporarily. The platform benefits everyone.</p>
                                    <p className='text-[#1F1C1E] font-Archivo text-[20px] font-normal leading-[34px]'>Lenders make money, borrowers save money, and the Earth's toxic
                                        load is reduced-one platform to help us all.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='p-12 rounded-[60px] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-32 bg-no-repeat bg-cover w-full lg:w-auto' style={{ backgroundImage: `url(/about-bg.png)` }}>
                    <p className='text-[#FFF] font-Manrope text-[45px] max-w-[355px] font-bold'>Get our services
                        very easily</p>
                    <div className='flex gap-3 flex-wrap'>
                         <img   src="/apple-btn.png"   alt="_apple" />
                         <img   src="/playstore-btn.png"   alt="_playstore" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default About;