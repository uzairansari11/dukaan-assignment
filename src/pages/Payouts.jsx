import React from "react";
import Nextpayout from "../components/Nextpayout";
import PendingAmount from "../components/PendingAmount";
import AmountProcess from "../components/AmountProcess";

const Payouts = () => {
  return (
    <div className="m-[32px] ">
      <div className="flex justify-between items-center">
        <p className="leading-[28px] font-medium text-[20px] text-[#1a181e] ">
          Overview
        </p>
        <div className="w-[137px] h-[36px] rounded-[4px] flex items-center  px-[14px] py-[6px] gap-x-[6px] bg-[#ffffff] border-[1px] border-[#d9d9d9]">
          <p className="leading-[24px] text-[16px] font-normal text-[#4D4D4D]   ">
            This Month
          </p>
          <img src="/svg/iconarrow.svg" alt="dropdown" />
        </div>
      </div>
      <div className="mt-[24px] flex justify-between border-2 border-yellow-300">
        <Nextpayout />
        <PendingAmount />
        <AmountProcess />
      </div>
      <div className="border-2 border-red-300"></div>
    </div>
  );
};

export default Payouts;
