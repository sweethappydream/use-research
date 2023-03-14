import React from "react";
import { triangle } from "../assets/svg";
import {
  woman,
  group1,
  group2,
  group3,
  bgCom,
  bgPic,
  verticalCard,
  catLetter,
  catBig,
} from "../assets/img";
import {
  ddd,
  design,
  dollar,
  zoom,
} from "../assets/svg";
import { BlackCard, Faqs, GoSales } from "../components/home";
import { useNavigate } from "react-router-dom";
import NeedHelp from "../components/home/NeedHelp";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-between px-[36px] md:px-[113px] py-16 lg:px-[13%] lg:flex-row gap-10">
        <div className="lg:w-[50%] lg:max-w-[600px]" data-aos="fade-in">
          <div className="text-center lg:text-start text-4xl text-purple md:text-7xl font-spoof">
            The easiest way to win faster with{" "}
            <span className=" text-orange">proof</span>!
          </div>
          <div className=" mt-6 lg:mt-8 2xl:text-2xl font-avenir text-lg">
            UserResearch is a platform that help creators,Product managers,
            founders and researchers to test their product with their user
            criteria and get to see how they are interacting with it.
          </div>
          <div className="flex items-center mt-6 lg:mt-8 font-spoof 2xl:text-2xl ">
            <div className="flex items-center justify-center rounded-[41px] px-[45px] py-[15px] bg-yellow hover:bg-dark-red hover:text-white cursor-pointer" onClick={() => navigate('/plan')}>
              Get Started
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center" data-aos="zoom-in">
          <img src={woman} alt="woman" />
        </div>
      </div>

      <div id="clients" className="text-center pb-10" >
        <div className=" font-spoof text-3xl p-7">
          Trusted by the leading companies of the future
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <img src={group1} alt="group1" />
          <img src={group2} alt="group2" />
          <img src={group3} alt="group3" />
        </div>
      </div>

      <div className="relative w-screen overflow-hidden pt-20">
        <img
          className=" absolute left-[-30px] w-[1312px] max-w-none "
          src={bgCom}
          alt="bgcom"
        />
        <div className="absolute top-[300px] right-[-100px] md:right-[-30px] w-[1300px] lg:w-full h-[1500px] xs:h-[1300px] sm:h-[1000px] standard:h-[887px] bg-yellow rounded-[68px] transform rotate-[-6deg] z-20 lg:max-w-[90%]" />
        <img
          className=" absolute left-[-260px] lg:left-[-30px] top-0 w-[506px] max-w-none z-40"
          src={verticalCard}
          alt="verticalCard"
        />

        <div className="relative flex flex-col md:flex-row lg:justify-between pt-[380px] px-[26px] lg:px-[20%] z-30 font-spoof gap-16">
          <div className="lg:w-[50%] lg:max-w-[400px]" >
            <div className="text-[35px] xl:text-[41px] py-3" data-aos="fade-up">
              Why you should use UserResearch
            </div>
            <img src={catBig} alt="catbig" className="py-6" data-aos="fade-up" />
            <div data-aos="fade-up">
              <BlackCard title="Product Managers" />
              <BlackCard title="Product Designers" />
              <BlackCard title="Design Strategists" />
              <BlackCard title="Creators" />
              <BlackCard title="Startup Founders" />
              <BlackCard title="Universities Researchers" />
            </div>
          </div>

          <div className="lg:w-[50%] lg:max-w-[400px]">
            <div className="flex items-start gap-2" data-aos="fade-up">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={zoom} alt="zoom" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] ">
                  Validate your product ideas and assess market demand 
                </div>
                <div className=" font-avenir text-[15px] py-4">
                  Validating ideas and market demand is now way easier, talk to your potential user to understand their needs before making big investments
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2" data-aos="fade-up">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={design} alt="design" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] ">
                  Convince your stakeholder with your design decisions with a proof
                </div>
                <div className=" font-avenir text-[15px] py-4">
                  Collect feedback from actual and potential users of your product, build your next product feature supported by user feedback
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2" data-aos="fade-up">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={dollar} alt="dollar" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] ">
                  Save time and money finding users to test with 
                </div>
                <div className=" font-avenir text-[15px] py-4">
                  Don’t let finding research participants consume your time and stretch your overall research time. UseResearch connects you with the users criteria you’re looking for in no time 
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2" data-aos="fade-up">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px] flex items-center justify-center">
                <img src={ddd} alt="ddd" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] ">
                  Fill the research gap in your design process
                </div>
                <div className=" font-avenir text-[15px] py-4">
                 Assumptions and intuitions are great, but validating them with actual users is even better
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className=" absolute  w-full max-w-none  z-10 h-[1700px] 2xl:h-auto"
          src={bgPic}
          alt="bgpic"
        />

        <div className=" px-6 relative pt-[100px] sm:pt-[280px] md:pt-[300px] lg:pt-[210px] z-40">
          <div className="justify-center text-white text-5xl hidden xl:flex py-20" data-aos="fade-up">
            <span>How does</span>
            <img src={catLetter} alt="catletter" className="px-3" />
            beta version works?
          </div>
          <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
            <div className="bg-white rounded-[19px] flex flex-col items-center justify-start w-full xs:w-[421px] h-[270px] pt-[30px] xs:gap-4" data-aos="fade-up">
              <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                1
              </div>
              <div className=" font-spoof text-2xl text-center">
                Sign up and create an account
              </div>
              <div className=" text-center font-avenir text-lg px-[30.5px]">
                Join UseResearch as researcher and create your account instantly
              </div>
            </div>

            <div className="bg-white rounded-[19px] flex flex-col items-center justify-start w-full xs:w-[421px] h-[270px] pt-[30px] xs:gap-4" data-aos="fade-up">
              <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                2
              </div>
              <div className=" font-spoof text-2xl text-center">
                Start your research project
              </div>
              <div className=" text-center font-avenir text-lg px-[30.5px]">
                Start your project now by adding your research criteria and your screener questions and you will be matched with your research participants
              </div>
            </div>

            <div className="bg-white rounded-[19px] flex flex-col items-center justify-start w-full xs:w-[421px] h-[270px] pt-[30px] xs:gap-4" data-aos="fade-up">
              <div className="bg-dark-red rounded-[30px] font-spoof h-[60px] w-[60px] flex items-center justify-center">
                3
              </div>
              <div className=" font-spoof text-2xl">
                Interview your users
              </div>
              <div className=" text-center font-avenir text-lg px-[30.5px]">
                Our team will schedule all of your research interviews based on your availability so you could start interviewing and collect insights
              </div>
            </div>
          </div>
          <NeedHelp />
        </div>
      </div>
      <Faqs />
      <div className="pb-[104px]" />
      <GoSales />
    </>
  );
};

export default Home;
