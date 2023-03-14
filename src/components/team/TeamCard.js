import React from "react";
import { facebook, linkedin, twitter } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ image, name, title, urlfacebook, urltwitter, urllinkedin }) => {
    const navigate = useNavigate();
    return (
        <div className="sm:w-[429px] sm:h-[500px] p-[10px] sm:p-[25px] my-14 bg-white rounded-xl shadow-md hover:scale-110 transition-transform">
            <img className="pb-3" src={image} alt={image} />
            <div className="font-spoof text-2xl py-3">
                {name}
            </div>
            <div className="font-avenir text-lg py-3">
                {title}
            </div>
            <div className="flex items-center gap-4 py-3">
                <img className=" cursor-pointer" src={facebook} alt="facebook" onClick={() => navigate({urlfacebook}) } />
                <img className=" cursor-pointer" src={twitter} alt="twitter" onClick={() => navigate({urltwitter}) }/>
                <img className=" cursor-pointer" src={linkedin} alt="linkedin" onClick={() => navigate({urllinkedin}) }/>
            </div>
        </div>
    )
}

export default TeamCard;