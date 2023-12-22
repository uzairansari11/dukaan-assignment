import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navtop from "../components/Navtop";
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="w-[224px]  bg-custom-blue-800">
        <Sidebar />
      </div>
      <div className="w-full bg-custom-white-100">
        <Navtop />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
