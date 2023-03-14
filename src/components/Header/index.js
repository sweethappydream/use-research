import React, { useState } from "react";
import { cat, catYel, logo } from "../../assets/img";
import { useNavigate } from "react-router-dom";
import { close, smMenuBtn } from "../../assets/svg";

const navData = [
  {
    title: "Story",
    route: "story"
  },
  {
    title: "Team",
    route: "team"
  },
  {
    title: "Our Pricing",
    route: "plan"
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  const onclick = (route) => {
    setSelected(prev => route);
    navigate('/' + route);
  }
  return (
    <div className="flex justify-between items-center mt-[42px] pl-[67px] pr-[60px]">
      <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')} />
      <div className="justify-center items-center font-medium text-base hidden md:flex font-avenir">
        {navData.map((item, index) => <div key={index} className={`px-5 hover:text-dark-red cursor-pointer ${selected === item.route ? "text-dark-red" : ""}`} onClick={() => onclick(item.route)}>{item.title}</div>)}
      </div>
      <div className="hidden justify-center items-center lg:flex text-lg font-spoof">
        <div className="mx-4 underline cursor-pointer" onClick={() => navigate('/tester')}>
          Get paid to test
        </div>
        <div className="flex items-center justify-center mx-4 rounded-[41px] bg-yellow hover:bg-dark-red hover:text-white h-[49px] w-[161px] cursor-pointer" onClick={() => navigate('/plan')}>
          Get Started
        </div>
      </div>
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <img src={smMenuBtn} alt="smMenuBtn" />
      </div>
      {open &&
        <div className="fixed h-screen right-0 top-0 w-[350px] bg-white p-8 z-50" data-aos="fade-left" >
          <div className="flex justify-between items-center">
            <img src={catYel} alt="cat" />
            <img className="w-[25px] h-[25px] cursor-pointer" src={close} alt="close" onClick={() => setOpen(false)} />
          </div>
          <div className="h-[1px] bg-border w-full mb-2 mt-4"/>
          {navData.map((item, index) => <div key={index} className={` text-base font-spoof py-5 hover:text-dark-red cursor-pointer ${selected === item.route ? "text-dark-red" : ""}`} onClick={() => onclick(item.route)}>{item.title}</div>)}
        </div>
      }
    </div>
  );
};

export default Header;
