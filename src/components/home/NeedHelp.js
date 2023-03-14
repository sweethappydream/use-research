import React from "react";
import { cat } from "../../assets/img";
import { useNavigate } from "react-router-dom";

const NeedHelp = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-[150px] mb-[81px]" data-aos="fade-up">
            <img src={cat} alt="cat" />
            <div className="px-2 flex flex-col justify-center md:justify-start md:items-start items-center">
                <div className=" font-spoof text-[21px] text-white">
                    Do you need help?
                </div>
                <div className=" font-avenir text-center md:text-left text-[15px] text-white w-[350px] py-4">
                    We provide free consolation that will asses you with the best
                    method to research
                </div>
                <div className="flex items-center justify-center rounded-[41px] font-spoof bg-yellow hover:bg-dark-red hover:text-white text-lg h-[49px] w-[200px] cursor-pointer" onClick={() => navigate('/talktoexperts')}>
                    Talk to an expert
                </div>
            </div>
        </div>
    )
}

export default NeedHelp;