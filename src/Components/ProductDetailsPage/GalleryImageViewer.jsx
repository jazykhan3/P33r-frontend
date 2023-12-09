/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
// import rightArrow from "../../Assets/right-arrow-viewer.svg";
// import leftArrow from "../../Assets/left-arrow-viewer.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function GalleryImageViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const imagesArray = location.state?.imagesArray || null;
  const [activeImg, setActiveImg] = useState(
    imagesArray?.[0] || { id: null, img: null }
  );

  useEffect(() => {
    if (!imagesArray) {
      navigate("/productDetail");
    }
  }, [imagesArray]);

  const handleArrowsClick = (type) => {
    const index = imagesArray.findIndex(
      (imageObj) => imageObj.id === activeImg.id
    );
    type === "right"
      ? index < imagesArray?.length - 1 &&
        setActiveImg(imagesArray?.[index + 1])
      : index > 0 && setActiveImg(imagesArray?.[index - 1]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black h-[100vh] md:h-auto">
        <div className="flex justify-end items-end w-full p-4">
          <span
            className="px-3 py-1 border border-white rounded-full cursor-pointer text-white"
            onClick={() => window.history.back()}
          >
            X
          </span>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 py-10 w-full">
          <div className="flex gap-6 justify-center items-center w-full">
            <img
              onClick={() => handleArrowsClick("left")}
              src="/left-arrow-viewer.svg"
              alt="_left"
              className="hidden lg:block cursor-pointer"
            />
            <div className="flex flex-col gap-5 w-full">
              <div className="lg:hidden flex w-full justify-end items-center">
                <div className="flex gap-4 items-center justify-center">
                  <img
                    onClick={() => handleArrowsClick("left")}
                    src="/left-arrow-viewer.svg"
                    alt="_left"
                    className="cursor-pointer"
                  />
                  <img
                    onClick={() => handleArrowsClick("right")}
                    src="/right-arrow-viewer.svg"
                    alt="_right"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="">
                <img
                  src={activeImg.img}
                  alt="pdPic"
                  className="w-full max-h-[736px]"
                />
              </div>
              <div className="w-full flex gap-5 overflow-x-scroll noScrollBar">
                {imagesArray?.map((item, index) => (
                  <div
                    key={index}
                    className={`min-w-[153px] h-[85px] rounded-md cursor-pointer ${
                      activeImg.id === item.id
                        ? "border border-gradientPink"
                        : ""
                    }`}
                    onClick={() => setActiveImg(item)}
                  >
                    <img
                      src={item.img}
                      alt="pdPic"
                      className="w-full h-full rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
            <img
              onClick={() => handleArrowsClick("right")}
              src="/right-arrow-viewer.svg"
              alt="_right"
              className="hidden lg:block cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryImageViewer;
