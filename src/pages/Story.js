import React from "react";
import { bgVerticalBlack, bgYellow2, cat, catLetter2 } from "../assets/img";
import { Faqs, GoSales } from "../components/home";
import { useNavigate } from "react-router-dom";

const Story = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className=" text-center text-4xl text-purple lg:text-6xl font-spoof px-2 sm:px-32 pt-20" data-aos="fade-in">
                How did our <span className=" text-orange"> Story </span><br />started!
            </div>
            <div className="relative w-screen overflow-hidden">
                <img
                    className="absolute right-0 w-[3000px] h-[1800px] lg:h-[1400px]  lg:top-0  max-w-none"
                    src={bgVerticalBlack}
                    alt="bgverticalblack"
                />
                <div className="relative flex flex-col-reverse justify-center items-center p-2 sm:p-[10%] pt-8 sm:pt-72 3xl:pt-96 gap-[100px] lg:gap-[10%] lg:flex-row lg:items-start">
                    <div className=" text-white font-avenir text-2xl lg:w-[70%] max-w-[800px]" data-aos="fade-up">
                        The story behind UserResearch started with a principle that we have
                        as design and product people, the principle simply says “Always
                        co-create with users” so with that embedded within our DNA, working
                        on any project, feature, or even ideas, has always required us to
                        work with users, and the pain points we had experienced first hand
                        with recruiting, screening, and scheduling user interviews got us
                        thinking that this should be easier.
                        <div className="py-2" > <br /></div>
                        Being empathetic of the problem was the main motive for UserResearch
                        to come to light, helping product teams, designers, and companies to
                        have a more simple and reliable process to conduct researches.
                    </div>
                    <div className="lg:w-[30%] max-w-[300px]">
                        <img src={cat} alt="cat" width="350px 2xl:400px" />
                    </div>

                </div>
                <img className="absolute w-[3000px] h-[1500px] xl:h-[1200px] max-w-none" src={bgYellow2} alt="bgyellow" />
                <div className=" px-6 relative pt-[200px] z-40 min-h-[400px]">
                    <div className="justify-center text-5xl hidden xl:flex py-20" data-aos="fade-up">
                        <span>How does</span>
                        <img src={catLetter2} alt="catletter" className="px-3" />
                        beta verion works?
                    </div>
                    <div className="flex flex-col items-center justify-center gap-6 xl:flex-row">
                        <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] gap-[21px]" data-aos="fade-up">
                            <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                                1
                            </div>
                            <div className=" font-spoof text-2xl">
                                Sign up and create an account
                            </div>
                            <div className=" text-center font-avenir text-lg px-[30.5px]">
                                Send us a request as a client and fill up the form so we can
                                create for you an account
                            </div>
                        </div>

                        <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] gap-[21px]" data-aos="fade-up">
                            <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                                2
                            </div>
                            <div className=" font-spoof text-2xl">
                                Provide us with your  screener
                            </div>
                            <div className=" text-center font-avenir text-lg px-[30.5px]">
                                A customer support agent will be reaching out to collect from
                                your the screener details
                            </div>
                        </div>

                        <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] gap-[21px]" data-aos="fade-up">
                            <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                                3
                            </div>
                            <div className=" font-spoof text-2xl">
                                Scheduling the interview
                            </div>
                            <div className=" text-center font-avenir text-lg px-[30.5px]">
                                We will ask you provide your schedule and timeline to get your
                                interview ready
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-[150px] mb-[81px]" data-aos="fade-up">
                        <img src={cat} alt="cat" />
                        <div className="px-2 flex flex-col justify-center md:justify-start md:items-start items-center">
                            <div className=" font-spoof text-[21px]">
                                Do you need help?
                            </div>
                            <div className=" font-avenir text-center md:text-left text-[15px] w-[350px] py-4">
                                We provide free consolation that will asses you with the best
                                method to research
                            </div>
                            <div className="flex items-center justify-center border border-black rounded-[41px] font-spoof bg-yellow hover:bg-dark-red hover:text-white text-lg h-[49px] w-[200px] cursor-pointer" onClick={() => navigate('/talktoexperts')}>
                                Talk to an expert
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Faqs />
            <div className="pb-[104px]" />
            <GoSales />
        </>
    );
};

export default Story;
