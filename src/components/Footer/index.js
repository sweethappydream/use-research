import React from "react";
import { logo } from "../../assets/img";
import { facebook, linkedin, twitter } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center md:justify-between items-center mt-20 mb-10 pt-24 px-16">
      <img src={logo} alt="logo" onClick={() => navigate('/')}/>
      <div className="justify-center items-center font-medium text-base hidden lg:flex font-avenir">
        <div className="px-4 cursor-pointer" onClick={() => navigate('/story')}>Story</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/team')}>Team</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/#clients')}>Clients</div>
        <div className="px-4 cursor-pointer" onClick={() => navigate('/#faqs')}>FAQs</div>
      </div>
      <div className="hidden justify-center items-center md:flex text-lg font-spoof">
        <img className="mx-3" src={facebook} alt="facebook"/>
        <img className="mx-3" src={twitter} alt="twitter"/>
        <img className="mx-3" src={linkedin} alt="linkedin"/>
      </div>
    </div>
  );
};

export default Footer;
