import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <div className="flex">
          <div className="flex flex-1 w-1/2 h-screen justify-center items-center py-10 bg-black text-white">
            <Outlet />
          </div>
          <img
            src="https://images.unsplash.com/photo-1529245019870-59b249281fd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            className="h-screen w-1/2 hidden 2xl:block object-cover bg-no-repeat"
          />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
