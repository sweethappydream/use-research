import React, { useState } from "react";
import { ddd, design, dollar, logo, success, wholeCardDown, wholeCardUp, zoom } from "../assets/img";
import { useNavigate } from "react-router-dom";

const ContactSales = () => {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const submit = () => {
        setSubmitted(true);
    }
    return (
        <div className="flex flex-col-reverse md:flex-row md:h-screen">
            <div className="relative md:w-[40%] overflow-hidden w-screen ">
                <img className="w-[1000px] max-w-none" src={wholeCardDown} alt="topcard" />
                <img className="w-[1000px] mt-[-10px] max-w-none" src={wholeCardDown} alt="topcard2" />
                <div className="flex flex-col justify-center items-center pt-10 px-[30px] md:px-[20px] xl:px-[71px]">

                    <div className=" text-center text-[35px] text-purple xl:text-5xl font-spoof ">
                        Test with users <br /><span className=" text-orange"> on demand! </span>
                    </div>
                    <div className="py-20 ">
                        <div className="flex items-start gap-2 py-6">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={zoom} alt="zoom" />
                            </div>
                            <div className=" font-spoof  text-[21px] 2xl:text-[25px]">
                                Help you in writing effective user testing script
                            </div>
                        </div>

                        <div className="flex items-start gap-2 py-6">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={design} alt="design" />
                            </div>
                            <div className=" font-spoof  text-[21px] 2xl:text-[25px]">

                                Talks about the continuous discovery and tactics to implement it
                            </div>
                        </div>

                        <div className="flex items-start gap-2 py-6">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                                <img src={dollar} alt="dollar" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] 2xl:text-[25px] ">
                                    Save time and money finding users to test with
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 pt-6">
                            <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px] flex items-center justify-center">
                                <img src={ddd} alt="ddd" />
                            </div>
                            <div className=" font-spoof">
                                <div className=" text-[21px] 2xl:text-[25px] ">
                                    Fill the research gap in your design process
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute bottom-0 w-[1000px] mt-[-10px] max-w-none" src={wholeCardUp} alt="bottomcard" />

                </div>
            </div>
            <div className="md:w-[60%] bg-[#F5F5F5] flex flex-col items-center">
                <div className="flex justify-center items-center mt-10">
                    <img className=" cursor-pointer" src={logo} alt="logo" onClick={() => navigate('/')}/>
                </div>

                {!submitted ? <div className="p-4">
                    <div className=" text-center text-4xl text-purple xl:text-5xl  font-spoof pt-20 px-12">
                        Contact our <span className=" text-orange"> Sales </span>!
                    </div>
                    <div className="mt-4 font-avenir text-center text-lg 2xl:text-2xl">
                        Fill out the form below and one of our experts will get in touch with you.
                    </div>
                    <form className="mt-10" onSubmit={submit}>
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="name">Full Name</label>
                                <input id="name" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="job">Job Title</label>
                                <input id="job" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Job Title" />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="email">Email Address</label>
                                <input id="email" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name@domain.com" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="phone">Phone Number</label>
                                <input id="phone" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="company">Compnay/Entity</label>
                                <input id="company" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Company/Entity" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] sm:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="business">Business Sector</label>
                                <input id="business" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Business Sector" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center py-3 w-full 2xl:py-5">
                            <label for="extra">Wanna say something?</label>
                            <input id="extra" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Write here..." />
                        </div>
                        <button type="submit" className="w-full text-lg bg-yellow rounded-3xl p-3 mt-6 font-spoof">Contact our team</button>
                    </form>
                </div>
                    :
                    <div className="flex flex-col justify-center items-center mt-10">
                        <img src={success} alt="success" />
                        <div className="font-spoof text-[40px]">
                            We'll be in touch soon!
                        </div>
                        <div className="font-avenir text-2xl">
                            Form sent successfully
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default ContactSales;