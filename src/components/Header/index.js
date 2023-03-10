import React, { useState } from "react";
import { logo } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  const onclick = (route) => {
    console.log(selected);
    setSelected(prev => route);
    navigate('/' + route);
  }
  return (
    <div className="flex justify-center md:justify-between items-center mt-[42px] pl-[67px] pr-[60px]">
      <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')}/>
      <div className="justify-center items-center font-medium text-base hidden lg:flex font-avenir">
        <button className={`px-5 cursor-pointer ${selected==='story' ? "text-dark-red":""}`} onClick={() => onclick('story')}>Story</button>
        <div className={`px-5 cursor-pointer ${selected==='team' ? "text-dark-red":""}`} onClick={() => onclick('team')}>Team</div>
        <div className={`px-5 cursor-pointer ${selected==='#clients' ? "text-dark-red":""}`} onClick={() => onclick('#clients')}>Clients</div>
        <div className={`px-5 cursor-pointer ${selected==='plan' ? "text-dark-red":""}`} onClick={() => onclick('plan')}>Our Pricing</div>
      </div>
      <div className="hidden justify-center items-center md:flex text-lg font-spoof">
        <div className="mx-4 underline cursor-pointer" onClick={() => navigate('/tester')}>
          Get paid to test
        </div>
        <div className="flex items-center justify-center mx-4 rounded-[41px] bg-yellow h-[49px] w-[161px] cursor-pointer" onClick={()=> navigate('/plan')}>
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Header;
