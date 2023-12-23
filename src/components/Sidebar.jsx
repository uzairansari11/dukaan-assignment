import React from "react";
import { sideBarOptionDetails } from "../utils/options";
import SidebarOptions from "./SidebarOptions";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="py-[16px] px-[10px]  text-custom-gray-300 h-screen flex flex-col justify-between">
      <>
        <div className="flex flex-col gap-y-[24px]  ">
          <div>
            <div className=" w-[192px] flex items-center justify-between h-[42px]  m-auto">
              <div>
                <img
                  src="/dukaanlogo.png"
                  alt="logo"
                  width={"39px"}
                  height={"39px"}
                  style={{ borderRadius: "4px" }}
                />
              </div>

              <div className=" flex gap-col-[12px] justify-between flex-col w-[108px]">
                <p className="font-[Inter] text-white text-[15px] font-normal  leading-[22px] ">
                  Nishyan
                </p>
                <p className=" text-custom-gray-300 text-[13px] font-[400px] underline leading-[14px]">
                  Visit store
                </p>
              </div>

              <div className=" h-full items-center flex">
                <img src="/svg/downarrow.svg" alt="downarrow" />
              </div>
            </div>
          </div>

          <div >
            {sideBarOptionDetails.map((ele) => {
              return (
                <NavLink key={ele.id} to={ele.path}>
                  <SidebarOptions
                    key={ele.id}
                    svg={ele.svg}
                    title={ele.title}
                    path={ele.path}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </>
      <div className="bg-[#ffffff0d] rounded-[4px] w-[192px] mx-auto">
        <div className="py-[6px] px-[12px] flex items-center gap-[10px]  text-sm ">
          <div className="p-[6px] bg-[#495064] rounded-[4px] ">
            <img src="/svg/wallet.svg" alt="wallet" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span>Available credits</span>
            <span className="text-white text-sm  font-[500]">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
