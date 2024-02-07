import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./auth/AuthLayout";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Index from "./root/pages/Index";
import RootLayout from "./root/pages/RootLayout";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
