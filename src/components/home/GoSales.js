import React from "react";
import { bgBlack } from "../../assets/img";

const GoSales = () => {
    return (
        <div className="relative my-10 w-screen overflow-hidden pb-32">
            <img className="absolute w-[3000px] h-[365px] max-w-none" src={bgBlack} alt="bgblack"/>
            <div className="relative text-white flex flex-col justify-center items-center gap-3 pt-[100px]">
                <span className="text-[32px] lg:text-[41px] text-center font-spoof">Are you looking for a research team?</span>
                <span className="text-[15px] font-avenir text-center">We have a wide network of top-tier researchers that can help you with your project</span>
                <div className="flex items-center justify-center rounded-[41px] bg-yellow text-lg h-[49px] w-[180px] text-black">
                    Talk to an Sales
                </div>
            </div>
        </div>
    )
}

export default GoSales;