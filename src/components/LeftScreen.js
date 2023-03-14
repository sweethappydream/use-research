import React from "react";
import { wholeCardDown, wholeCardUp } from "../assets/img";
import { zoom, design, ddd, dollar } from "../assets/svg"

const LeftScreen = () => {
    return (
        <div className="relative md:w-[40%] standard:w-[33%] overflow-hidden w-screen md:h-auto ">
            <img className="w-[1000px] max-w-none" src={wholeCardDown} alt="topcard" />
            <img className="w-[1000px] mt-[-10px] max-w-none" src={wholeCardDown} alt="topcard2" />
            <div className="flex flex-col items-center md:pt-7 standard:pt-10  px-[30px] md:px-[20px] xl:px-[71px]">

                <div className=" text-center text-4xl text-purple font-spoof ">
                    Test with users <br /><span className=" text-orange"> on demand! </span>
                </div>
                <div className="py-8 pb-20 px-[10%]">
                    <div className="flex items-start gap-2 py-3 lg:py-6">
                        <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                            <img src={zoom} alt="zoom" />
                        </div>
                        <div className=" font-spoof  text-lg">
                            Help you in writing effective user testing script
                        </div>
                    </div>

                    <div className="flex items-start gap-2 py-3 lg:py-6">
                        <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                            <img src={design} alt="design" />
                        </div>
                        <div className=" font-spoof  text-lg">

                            Talks about the continuous discovery and tactics to implement it
                        </div>
                    </div>

                    <div className="flex items-start gap-2 py-3 lg:py-6">
                        <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                            <img src={dollar} alt="dollar" />
                        </div>
                        <div className=" font-spoof">
                            <div className=" text-lg">
                                Save time and money finding users to test with
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-2 pt-6">
                        <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px] flex items-center justify-center">
                            <img src={ddd} alt="ddd" />
                        </div>
                        <div className=" font-spoof">
                            <div className=" text-lg">
                                Fill the research gap in your design process
                            </div>
                        </div>
                    </div>
                </div>
                <img className="absolute bottom-0 w-[1000px] mt-[-10px] max-w-none" src={wholeCardUp} alt="bottomcard" />

            </div>
        </div>
    )
}

export default LeftScreen;