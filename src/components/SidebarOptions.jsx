import React from "react";

const SidebarOptions = ({ svg, title }) => {
  return (
    <div
      className="flex w-[208px]  py-[8px] px-[16px]
      gap-[12px] rounded-[4px]"
    >
      {svg}
      <p className="font-Inter text-[14px] not-italic font-normal leading-5">
        {title}
      </p>
    </div>
  );
};

export default SidebarOptions;
