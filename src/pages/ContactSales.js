import React, { useState } from "react";
import { logo, success} from "../assets/img";
import { useNavigate } from "react-router-dom";
import LeftScreen from "../components/LeftScreen";

const ContactSales = () => {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const submit = () => {
        setSubmitted(true);
    }
    return (
        <div className="flex flex-col-reverse md:flex-row md:h-screen">
            <LeftScreen/>
            <div className="md:w-[60%] standard:w-[67%] bg-[#F5F5F5] flex flex-col items-center md:h-auto">
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
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="name">Full Name</label>
                                <input id="name" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="job">Job Title</label>
                                <input id="job" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Job Title" />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="email">Email Address</label>
                                <input id="email" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Name@domain.com" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="phone">Phone Number</label>
                                <input id="phone" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center justify-center">
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
                                <label for="company">Compnay/Entity</label>
                                <input id="company" className="border border-[#E2E1E5] text-sm 2xl:text-lg p-3 rounded-3xl" placeholder="Company/Entity" />
                            </div>
                            <div className="flex flex-col py-3 w-[171px] xs:w-full lg:w-[300px] 2xl:w-[400px] 2xl:py-5">
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