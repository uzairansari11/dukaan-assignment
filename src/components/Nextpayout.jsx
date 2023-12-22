import React from "react";

const Nextpayout = () => {
  return (
    <div className="flex flex-col px-[20px] border-2 bg-[#146EB4] ">
      <div className=" py-[20px] text-[white] ">
        <div className="flex gap-[6px] items-center  font-light ">
          <p className="title">Next Payout</p>
          <img src="/svg/whitequestion.svg" alt="question" />
        </div>

        <div className="flex items-center justify-between mt-[16px] ">
          <p className="font-medium text-[28px]">₹2,312.23</p>
          <div className="flex gap-1 text-[14px] font-medium   cursor-pointer">
            <p className="underline text-[16px] leading-[24px] font-medium ">
              23 orders
            </p>
            <img src="/svg/rightarrow.svg" alt="arrow" />
          </div>
        </div>
      </div>
      <div className="py-[10px] px-[20px] flex justify-between items-center text-sm font-light  bg-custom-blue-600 relative">
        <p>Next payout date:</p>
        <p>Today, 04:00PM</p>
      </div>
    </div>
  );
};

export default Nextpayout;
