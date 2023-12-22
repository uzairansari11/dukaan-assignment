import React from 'react'

const AmountProcess = () => {
  return (
    <div className="w-[370.67px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
            Amount Processed
          </div>
          <div className="w-4 h-4 relative" />
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
            <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
              ₹23,92,312.19
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmountProcess