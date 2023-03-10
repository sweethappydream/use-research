import React from "react";
import { facebook, linkedin, twitter } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ image, name, title, urlfacebook, urltwitter, urllinkedin }) => {
    const navigate = useNavigate();
    return (
        <div className="w-[429px] h-[500px] p-[25px] bg-white rounded-xl shaodw shadow-md hover:scale-110 transition-transform">
            <img className="pb-3" src={image} alt={image} />
            <div className="font-spoof text-2xl py-3">
                {name}
            </div>
            <div className="font-avenir text-lg py-3">
                {title}
            </div>
            <div className="flex items-center py-3">
                <img className="mr-3 cursor-pointer" src={facebook} alt="facebook" onClick={() => navigate({urlfacebook}) } />
                <img className="mx-3 cursor-pointer" src={twitter} alt="twitter" onClick={() => navigate({urltwitter}) }/>
                <img className="ml-3 cursor-pointer" src={linkedin} alt="linkedin" onClick={() => navigate({urllinkedin}) }/>
            </div>
        </div>
    )
}

export default TeamCard;