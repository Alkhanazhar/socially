import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TopBar from "../shared/TopBar";
import SideBar from "../shared/SideBar";

const RootLayout = () => {
  const navigate = useNavigate();
  const isAuthenticated = false;
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/signup");
  //   }
  // }, []);

  return (
    <div className="w-full md:flex bg-black text-white">
      <TopBar />
      <SideBar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
