import React from "react";
import logo from "../../assets/img/logo.jpg";
const Header = () => {
  return (
    <div className="flex justify-center md:justify-between items-center mt-[20px] px-16">
      <img src={logo} alt="logo" />
      <div className="justify-center items-center font-medium text-base hidden lg:flex font-avenir">
        <div className="px-4">Story</div>
        <div className="px-4">Team</div>
        <div className="px-4">Clients</div>
        <div className="px-4">FAQs</div>
      </div>
      <div className="hidden justify-center items-center md:flex text-lg font-spoof">
        <div className="mx-6 underline">
          Get paid to test
        </div>
        <div className="flex items-center justify-center mx-6 rounded-[41px] bg-yellow h-[49px] w-[161px] ">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Header;
