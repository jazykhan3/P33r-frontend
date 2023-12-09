// import heroBg from "../Assets/hero-bg.png";

function Hero() {
  return (
    <>
      <div
        className="pt-40 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/hero-bg.png)` }}
      >
        <div className="flex flex-col gap-12 px-4 md:px-6 lg:px-32 pb-32">
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-manrope text-[64px] max-w-[600px] font-bold leading-[84.48px]">
              Get Your Boat Rental Super Quick and Easy
            </h2>
            <p className="text-[#E0E2E5] font-archivo text-[20px] max-w-[600px] font-normal leading-8">
              Create cutting-edge space travel technology, such as a strong
              propulsion system that can carry people and goods to other areas
              in space.
            </p>
          </div>
          <button className="bg-gradient-to-r hover:from-gradientBlue hover:via-gradientLightBlue hover:to-gradientPink hover:text-white rounded-full bg-white px-10 py-3 w-fit text-[#1F1C1E] outline-none border-none text-center font-manrope text-base font-bold hover:font-medium">
            Get Started
          </button>
        </div>
        <div className="bg-gradient-to-t from-white via-[#FFF9F9] to-transparent h-[113px] w-full"></div>
      </div>
    </>
  );
}
export default Hero;
