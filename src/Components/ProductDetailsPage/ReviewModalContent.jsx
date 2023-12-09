// import closeIcon from "../../Assets/close-circle.svg";
import { Progress } from "antd";

function ReviewModalContent({
  handleCancelModal,
  reviewList1,
  reviewList2,
  reviewsList,
}) {
  const reviewListToShow = [
    ...reviewsList,
    ...reviewsList,
    ...reviewsList,
    ...reviewsList,
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex gap-6 justify-between items-center">
          <p className="bg-gradient-to-r from-gradientBlue via-gradientLightBlue to-gradientPink bg-clip-text text-transparent text-center font-manrope text-xl font-medium">
            All Reviews
          </p>
          <img
            src="/close-circle.svg"
            alt="_close"
            className="cursor-pointer"
            onClick={handleCancelModal}
          />
        </div>
        <div className="flex flex-col gap-8 max-h-[728px] overflow-y-scroll">
          <div className="flex flex-col gap-4">
            <p className="text-[#1F1C1E] font-Manrope text-lg leading-normal font-medium">
              Rating
            </p>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex flex-col gap-4 md:pr-6 md:border-r md:border-[#E0E0E0]">
                {reviewList1.map((item, index) => (
                  <div key={index} className="flex justify-between gap-6 w-full md:min-w-[148px] items-center flex-wrap">
                    <p className="text-[#535052] text-sm font-Manrope leading-normal font-medium">
                      {item.name}
                    </p>
                    <div className="flex gap-2 items-center justify-center">
                      <Progress
                        percent={item.rating}
                        showInfo={false}
                        strokeColor="#ffc107"
                        className="antdProgress m-0"
                      />
                      <span className="text-[#535052] text-sm leading-normal font-Manrope font-medium">
                        {item.review}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 ">
                {reviewList2.map((item, index) => (
                  <div key={index} className="flex justify-between gap-6 w-full md:min-w-[148px] items-center flex-wrap">
                    <p className="text-[#535052] text-sm font-Manrope leading-normal font-medium">
                      {item.name}
                    </p>
                    <div className="flex gap-2 items-center justify-center">
                      <Progress
                        percent={item.rating}
                        showInfo={false}
                        strokeColor="#ffc107"
                        className="antdProgress m-0"
                      />
                      <span className="text-[#535052] text-sm leading-normal font-Manrope font-medium">
                        {item.review}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-ful pb-3 border-b border-[#E0E0E0]">
            <p className="text-[#1F1C1E] font-Manrope text-lg leading-normal font-medium">
              Rating
            </p>
            <p className="text-[#747073] font-Manrope text-sm leading-normal">
              120 reviews
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {reviewListToShow.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt="reviewer"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="flex flex-col">
                    <p className="text-[#1F1C1E] font-Manrope text-base leading-normal font-bold">
                      {item.name}
                    </p>
                    <p className="text-[#747073] font-Poppins text-xs leading-normal">
                      {item.date}
                    </p>
                  </div>
                </div>
                <p className="text-[#747073] font-Manrope text-sm leading-normal">
                  {item.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewModalContent;
