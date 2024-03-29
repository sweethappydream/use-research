import React from "react";
import { bgCom, bgYellow1, catYel, location, paid, perspective, verticalCard } from "../assets/img";
import { GoSales } from "../components/home";

const Tester = () => {
    return (
        <>
            <div className="relative pt-28 w-screen overflow-hidden">
                <img
                    className=" absolute left-[-30px] w-[1312px] max-w-none xl:w-[85%]"
                    src={bgCom}
                    alt="bgcom"
                />
                <div className="absolute top-[300px] right-[-100px] lg:right-[-30px] w-[1300px] lg:w-full h-[1300px] sm:h-[1200px] lg:h-[827px] bg-yellow rounded-[68px] transform rotate-[-6deg] z-20 lg:max-w-[95%]" />

                <img
                    className=" absolute left-[-260px] lg:left-[-30px] top-0 w-[506px] max-w-none"
                    src={verticalCard}
                    alt="verticalCard"
                />

                <div className="relative flex flex-col lg:flex-row lg:items-end pt-[300px] sm:pt-[316px] px-[14%] font-spoof z-50 gap-[78px] mb-[238px]">
                    <div className="lg:w-[50%]" data-aos="fade-up">
                        <div className=" text-[41px] text-purple font-spoof pt-10 md:pt-20 pb-9" >
                            Get paid with <span className=" text-orange"> UserResearch! </span>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={paid} alt="paid" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px]  ">
                                    Get paid $$$
                                </div>
                                <div className=" font-avenir text-[15px] py-4">
                                    Make up to 6K per month by participating in testing products and ideas
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={location} alt="location" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] ">
                                    Test whereever you are
                                </div>
                                <div className=" font-avenir text-[15px] py-4">
                                    Wherever from a couch or in your dorm to a chair with the beach views
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={perspective} alt="perspective" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] ">
                                    Share your perspective
                                </div>
                                <div className=" font-avenir text-[15px] py-4">
                                    via tests you match to help world organizations’ products and services
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="lg:w-[50%]">
                        <div className="bg-white rounded-3xl w-full h-[386px] p-8 max-w-[1000px]" data-aos="fade-up">
                            <div className="flex items-center font-spoof text-2xl gap-4 pb-3">
                                <img src={catYel} alt="cat" />
                                Ready to get paid?
                            </div>
                            <form onSubmit="">
                                <div className="flex flex-col py-3">
                                    <label for="name">Full Name</label>
                                    <input id="name" className="border border-[#E2E1E5] text-sm p-3 rounded-3xl" placeholder="Name" />
                                </div>
                                <div className="flex flex-col py-3">
                                    <label for="email">Email Address</label>
                                    <input id="email" className="border border-[#E2E1E5] text-sm p-3 rounded-3xl" placeholder="Name@domain.com" />
                                </div>
                                <button type="submit" className="w-full text-lg bg-yellow hover:bg-dark-red hover:text-white rounded-3xl p-3 mt-3">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
                <GoSales />

            </div>
        </>
    )
}

export default Tester;