// import footerBg from "../../Assets/footer-bg.png";
// import peerLogo from "../../Assets/peer-logo.svg";
// import rightArrow from "../../Assets/listing-right-arrow.svg";
// import bottomStyledBorder from "../../Assets/bottom-styled-border.png";
import Image from 'next/image';

function Footer({ calledFrom }) {
  const footerMenus = [
    {
      heading: "Popular Categories",
      subHeadings: ["Beachfront", "Amazing pools", "Tiny homes", "Desert"],
    },
    {
      heading: "Company",
      subHeadings: ["About", "Blog", "Terms of Use"],
    },
    {
      heading: "Contact  Us",
      subHeadings: ["Contact  us", "Terms of use", "FAQs"],
    },
  ];
  return (
    <>
      <div
        className={`px-4 md:px-32 bg-[#f9f9f9] flex flex-col gap-24 ${
          calledFrom === "productDetail" ? "pt-12" : ""
        }`}
      >
        {calledFrom === "landingPage" && (
          <div
            className="rounded-[60px] p-3 sm:p-12 flex flex-col xl:flex-row items-center gap-6 xl:gap-40 justify-between bg-no-repeat bg-cover mt-[-120px]"
            style={{ backgroundImage: `url(/footer-bg.png)` }}
          >
            <div className="text-[#212674] font-Manrope text-[45px] font-bold leading-normal flex justify-end">
              <span className="max-w-[199px]">Ready to stay with</span>{" "}
               <img   src="/peer-logo.svg" alt="_peer" className="mt-[73px]" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-black font-manrope text-lg font-semibold leading-normal">
                Send us request to get quotation.
              </p>
              <div className="rounded-full bg-white p-2 pl-6 flex gap-6">
                <input
                  type="email"
                  placeholder="Whats your email?"
                  className="outline-none border-none"
                />
                <button className="hidden sm:flex bg-gradientPink text-white px-2 py-4 sm:px-8 rounded-full text-sm  font-manrope">
                  Get Started
                </button>
                 <img   className="sm:hidden" src="/listing-right-arrow.svg"   alt="_getStarted" />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex gap-24 justify-between flex-col lg:flex-row">
            <div className="flex flex-col gap-3">
               <img   src="/peer-logo.svg" alt="_logo" className="w-32" />
              <p className="max-w-[271px] text-[#747073] font-Manrope text-sm font-medium leading-tight">
                P33R is a p2p platform that allows you get access to apartments
                and cars on rent.
              </p>
            </div>
            <div className="flex gap-6 sm:gap-10 md:gap-24 xl:gap-40 pb-8 flex-wrap">
              {footerMenus.map((menu, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <p className="text-[#1F1C1E] font-Manrope text-lg font-medium leading-medium">
                    {menu.heading}
                  </p>
                  <div className="flex flex-col gap-2">
                    {menu.subHeadings.map((subHeading, index) => (
                      <p key={index} className="text-[#747073] font-Manrope text-base leading-tight">
                        {subHeading}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
           <img   src="/bottom-styled-border.png" alt="_border" />
          <div className="flex justify-center items-center p-6 text-[#535052] font-Manrope text-center text-base font-medium">
            © 2022 P33R, Rent Local, Experience Global
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
