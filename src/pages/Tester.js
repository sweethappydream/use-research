import React from "react";
import Outline from "../layout";
import { bgCom, bgYellow1, cat, catBig, catYel, design, location, paid, perspective, verticalCard, zoom } from "../assets/img";
import { GoSales } from "../components/home";

const Tester = () => {
    return (
        <Outline>
            <div className="relative py-28 w-screen overflow-hidden">
                <img
                    className=" absolute left-[-30px] w-[1312px] max-w-none xl:w-[85%]"
                    src={bgCom}
                    alt="bgcom"
                />
                <img
                    className=" absolute right-[-100px] lg:right-0 top-[330px] lg:top-80 max-w-none h-[1400px] xl:w-[95%] z-30 xl:h-[1200px] 2xl:h-[1400px] 3xl:h-auto"
                    src={bgYellow1}
                    alt="bgyellow"
                />
                <img
                    className=" absolute left-[-260px] lg:left-[-30px] top-0 w-[506px] max-w-none"
                    src={verticalCard}
                    alt="verticalCard"
                />

                <div className="relative flex flex-col xl:flex-row xl:items-end pt-[430px] xl:pt-[430px] px-[14%] font-spoof z-50 gap-16">
                    <div className="xl:w-[50%]">
                        <div className=" text-4xl 3xl:text-7xl text-purple lg:text-6xl font-spoof pt-20 py-20">
                            Get paid with <span className=" text-orange"> UserResearch! </span>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={paid} alt="paid" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] 2xl:text-[35px] ">
                                    Get paid $$$
                                </div>
                                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                                    Make up to 6K per month by participating in testing products and ideas
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={location} alt="location" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] 2xl:text-[35px] ">
                                    Test whereever you are
                                </div>
                                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                                    Wherever from a couch or in your dorm to a chair with the beach views
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={perspective} alt="perspective" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] 2xl:text-[35px] ">
                                    Share your perspective
                                </div>
                                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                                    via tests you match to help world organizations’ products and services
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="xl:w-[50%]">
                        <div className="bg-white rounded-3xl w-full h-[386px] p-8">
                            <div className="flex items-center font-spoof text-2xl gap-4 pb-3">
                                <img src={catYel} alt="cat" />
                                Ready to get paid?
                            </div>
                            <div className="flex flex-col py-3">
                                <label for="name">Full Name</label>
                                <input id="name" className="border border-[#E2E1E5] text-sm p-3 rounded-3xl" placeholder="Name" />
                            </div>
                            <div className="flex flex-col py-3">
                                <label for="email">Email Address</label>
                                <input id="email" className="border border-[#E2E1E5] text-sm p-3 rounded-3xl" placeholder="Name@domain.com" />
                            </div>
                            <button className="w-full text-lg bg-yellow rounded-3xl p-3 mt-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <GoSales/>
        </Outline>
    )
}

export default Tester;