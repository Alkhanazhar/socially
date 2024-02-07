import React from "react";

const AuthForm = ({ title, details, subDetails }) => {
  return (
    <>
      <div>
        <h2 className="cursive text-6xl tracking-widest text-[#f66803] text-center font-bold sm:pt-12">
          {title}
        </h2>

        <h3 className="text-[24px] mt-2 text-center">{details}</h3>
        <h4 className="text-[14px] mt-2 text-center">{subDetails}</h4>
      </div>
    </>
  );
};

export default AuthForm;
