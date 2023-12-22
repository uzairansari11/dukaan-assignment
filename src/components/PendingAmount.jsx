import React from 'react'

const PendingAmount = () => {
  return (
    <div className="w-[370.67px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="text-neutral-600 text-base font-normal font-['Inter'] leading-normal">
            Amount Pending
          </div>
          <div className="w-4 h-4 relative" />
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-zinc-900 text-[32px] font-medium font-['Galano Grotesque'] leading-[38px]">
            ₹92,312.20
          </div>
          <div className="justify-start items-center flex">
            <div className="justify-start items-start gap-2 flex">
              <div className="text-sky-700 text-base font-medium font-['Galano Grotesque'] underline leading-normal">
                13 orders
              </div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingAmount