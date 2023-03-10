import React from "react";
import { bgYellow4, check } from "../assets/img";
import { Faqs, GoSales } from "../components/home";
import { useNavigate } from "react-router-dom";

const Plan = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="relative w-screen overflow-hidden">
                <img className="absolute w-[3000px] h-[1300px] lg:h-[900px] max-w-none" src={bgYellow4} alt="bgyellow" />
                <div className="relative pb-32 3xl:mb-40">
                    <div className=" text-center text-4xl text-purple lg:text-6xl font-spoof px-3 md:px-32 pt-20">
                        Flexible Plans designed <br /> for every <span className=" text-orange"> team </span> !
                    </div>
                    <div className="text-center text-lg font-avenir py-10 3xl:text-2xl">
                        Accelerate your design process and be on point with UseResearch
                    </div>
                    <div className="flex flex-col justify-evenly items-center gap-8 lg:items-start lg:flex-row px-5 md:px-24">
                        <div className="bg-white rounded-xl w-full sm:w-[592px] p-4 2xl:w-[670px]">
                            <div className="flex items-center font-spoof text-[27px] font-bold pb-4">
                                Starter Plan
                            </div>
                            <div className="flex items-end font-spoof text-[27px] font-bold gap-2 pb-4">
                                EGP 1200
                                <span className="font-avenir font-normal text-xs pb-2">/ 10 credits</span>
                            </div>
                            <div className="font-avenir text-lg text-light">
                                Recommended for small personal projects, Quick usability testing and startups
                            </div>
                            <div className="h-[1px] bg-border w-full my-4" />
                            <div className="font-avenir text-lg text-light pb-4">
                                What you should expect
                            </div>
                            <div className="flex items-center font-semibold text-lg gap-2 pb-4">
                                <img src={check} alt="check" />
                                1 credit / 1 User
                            </div>
                            <button type="submit" className="w-full font-spoof font-bold text-lg bg-yellow rounded-3xl p-3 " onClick={() => navigate('/login')}>Subscribe Now</button>

                        </div>
                        <div className="bg-white rounded-xl w-full sm:w-[592px] p-4 2xl:w-[670px]">
                            <div className="flex items-center font-spoof text-[27px] font-bold pb-4">
                                Enterprise Plan / Yearly
                            </div>
                            <div className="font-avenir text-lg text-light">
                                Recommended for design teams, Enterprises, Governments
                            </div>
                            <div className="h-[1px] bg-border w-full my-4" />
                            <div className="font-avenir text-lg text-light pb-4">
                                What you should expect
                            </div>
                            <div className="flex items-center font-semibold text-lg gap-2 pb-4">
                                <img src={check} alt="check" />
                                Unlimited recruitment credits
                            </div>
                            <div className="flex items-center font-semibold text-lg gap-2 pb-4">
                                <img src={check} alt="check" />
                                A dedicated research partner
                            </div>
                            <div className="flex items-center font-semibold text-lg gap-2 pb-4">
                                <img src={check} alt="check" />
                                A dedicated Account Manager
                            </div>
                            <button type="submit" className="w-full text-lg bg-white text-dark-red border border-dark-red rounded-3xl p-3 mt-3" onClick={() => navigate('/contactsales')}>Contact Sales</button>

                        </div>
                    </div>
                </div>
                <Faqs />
                <div className="h-[100px]"/>
                <GoSales />
            </div>
        </>
    )
}

export default Plan;