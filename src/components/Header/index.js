import React from "react";
import { logo } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center md:justify-between items-center mt-[20px] px-16">
      <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')}/>
      <div className="justify-center items-center font-medium text-base hidden lg:flex font-avenir">
        <div className="px-4 cursor-pointer" onClick={() => navigate('/story')}>Story</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/team')}>Team</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/#clients')}>Clients</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/#faqs')}>FAQs</div>
      </div>
      <div className="hidden justify-center items-center md:flex text-lg font-spoof">
        <div className="mx-6 underline cursor-pointer" onClick={() => navigate('/tester')}>
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
