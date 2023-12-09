import mapImg from "../../Assets/map-img-2.png";
import Image from 'next/image';

function MapLocation() {
  return (
    <>
      <div className="pt-12 pb-20 flex flex-col gap-8">
        {/* Map Heading */}
        <p className="w-fit bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
          Map location
        </p>

        {/* Map */}
        <div>
           <img   src="/map-img-2.png" alt="map" className="w-full"/>
        </div>

        {/* Location Description */}
        <div className="flex flex-col gap-3">
          <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
            Calaca, Calabazon, Philippines
          </p>
          <p className="text-[#747073] font-Manrope text-base leading-normal">
            Dialect is excellent - short and sweet and effective lessons and
            great quick review which is key to remembering. I love it! I’m
            learning Dutch!! I enjoy the dialogues and scenarios, Dialect is
            excellent - short and sweet and effective lessons and great quick
            review which is key to remembering. I love it! I’m learning Dutch!!
            I enjoy the dialogues and scenarios,{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default MapLocation;
