import React from "react";
import Layout from "../components/Layout";
import { triangle } from "../assets/svg";
import { woman, group1, group2, group3, bgCom, bgBlack, bgPic, bgYellow, verticalCard, catBig} from "../assets/img"

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center px-9 py-16 lg:px-36 lg:flex-row gap-10">
        <div className="p-7 lg:w-[50%]">
          <div className=" text-4xl text-purple lg:text-6xl font-spoof">
            The easiest way to win faster with{" "}
            <span className=" text-orange">proof</span>!
          </div>
          <div className=" mt-6 lg:mt-8 font-avenir text-lg">
            UserResearch is a platform that help creators,Product managers,
            founders and researchers to test their product with their user
            criteria and get to see how they are interacting with it.
          </div>
          <div className="flex items-center mt-6 lg:mt-8 font-spoof ">
            <div className="flex items-center justify-center rounded-[41px] bg-yellow h-[49px] w-[161px] ">
              Get Started
            </div>
            <div className="flex items-center mx-6">
              <img src={triangle} alt="triangle" />
              <div className="underline px-2">See how it works!</div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-center">
          <img src={woman} alt="woman" />
        </div>
      </div>

      <div className="text-center pb-10">
        <div className=" font-spoof text-3xl p-7">
            Trusted by the leading companies of the future
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <img src={group1} alt="group1"/>
            <img src={group2} alt="group2"/>
            <img src={group3} alt="group3"/>
        </div>
      </div>
      <div className="relative py-28 w-screen overflow-hidden min-h-[1000px]">
        <img className=" absolute left-[-30px] w-[1081px] max-w-none lg:w-[80%]" src={bgCom} alt="bgcom"/>
        <img className=" absolute right-[-100px] lg:right-0 top-[330px] lg:top-32 max-w-none lg:w-[80%]" src={bgYellow} alt="bgyellow" />
        <img className=" absolute left-[-260px] lg:left-[-30px] top-0 w-[506px] max-w-none" src={verticalCard} alt="verticalCard" />
        <div className="flex lg:flex-col pt-[280px] px-[14%] font-spoof">
            <div className="">
                <div className=" text-[41px] py-3">
                    Why you should use UserResearch
                </div>
                <img src={catBig} alt="catbig" className="py-6"/>
                
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
