import React from "react";
import Layout from "../layout";
import { triangle } from "../assets/svg";
import {
  woman,
  group1,
  group2,
  group3,
  bgCom,
  bgBlack,
  bgPic,
  bgYellow1,
  verticalCard,
  catBig,
  ddd,
  design,
  dollar,
  zoom,
  catLetter,
  cat,
} from "../assets/img";
import { BlackCard, Faqs, GoSales } from "../components/home";
import Footer from "../components/Footer";

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
          <img src={group1} alt="group1" />
          <img src={group2} alt="group2" />
          <img src={group3} alt="group3" />
        </div>
      </div>

      <div className="relative py-28 w-screen overflow-hidden">
        <img
          className=" absolute left-[-30px] w-[1312px] max-w-none xl:w-[95%]"
          src={bgCom}
          alt="bgcom"
        />
        <img
          className=" absolute right-[-100px] lg:right-0 top-[330px] lg:top-80 max-w-none h-[1300px] xl:w-[95%] lg:h-[1000px] z-30 xl:h-[1200px] 2xl:h-[1400px] 3xl:h-auto"
          src={bgYellow1}
          alt="bgyellow"
        />
        <img
          className=" absolute left-[-260px] lg:left-[-30px] top-0 w-[506px] max-w-none"
          src={verticalCard}
          alt="verticalCard"
        />

        <div className="relative flex flex-col lg:flex-row pt-[430px] xl:pt-[530px] px-[14%] font-spoof z-50 gap-16">
          <div className="lg:w-[50%]">
            <div className=" text-[41px] 2xl:text-[60px] py-3">
              Why you should use UserResearch
            </div>
            <img src={catBig} alt="catbig" className="py-6" />
            <div className="flex items-center py-2">
              <BlackCard title="Product Managers" />
              <div className="px-2" />
              <BlackCard title="Product Designers" />
            </div>
            <div className="flex items-center py-2">
              <BlackCard title="Design Strategists" />
              <div className="px-2" />
              <BlackCard title="Creators" />
            </div>
            <div className="flex items-center py-2">
              <BlackCard title="Startup Founders" />
              <div className="px-2" />
              <BlackCard title="Universities Researchers" />
            </div>
          </div>

          <div className="lg:w-[50%]">
            <div className="flex items-start gap-2">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={zoom} alt="zoom" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] 2xl:text-[35px] ">
                  Validate your product ideas and assess market demand
                </div>
                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                  UserResearch is a platform that help creators, Product
                  managers, founders.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={design} alt="design" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] 2xl:text-[35px] ">
                  Convince your stakeholders with your desing decisions with a
                  proof
                </div>
                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                  UserResearch is a platform that help creators, Product
                  managers.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px]">
                <img src={dollar} alt="dollar" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] 2xl:text-[35px] ">
                  Save time and money finding users to test with
                </div>
                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                  UserResearch is a platform that help creators, Product
                  managers, founders.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="bg-black rounded-3xl p-3 w-12 h-12 min-w-[48px] flex items-center justify-center">
                <img src={ddd} alt="ddd" />
              </div>
              <div className=" font-spoof">
                <div className=" text-[21px] 2xl:text-[35px] ">
                  Fill the research gap in your design process
                </div>
                <div className=" font-avenir text-[15px] 2xl:text-[24px] py-4">
                  UserResearch is a platform that help creators, Product
                  managers.
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className=" absolute  w-full max-w-none  z-20 h-[1700px] 2xl:h-auto"
          src={bgPic}
          alt="bgpic"
        />

        <div className=" px-6 relative pt-[500px] z-40 min-h-[400px]">
          <div className="justify-center text-white text-5xl hidden xl:flex py-20">
            <span>How does</span>
            <img src={catLetter} alt="catletter" className="px-3" />
            beta verion works?
          </div>
          <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
            <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] p-3">
              <div className="bg-dark-red rounded-[30px] font-spoof h-14 w-14 flex items-center justify-center">
                1
              </div>
              <span className=" font-spoof text-2xl">
                Sign up and create an account
              </span>
              <span className=" font-spoof text-lg">
                Send us a request as a client and fill up the form so we can
                create for you an account
              </span>
            </div>

            <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] p-3">
              <div className="bg-dark-red rounded-[30px] font-spoof h-14 w-14 flex items-center justify-center">
                2
              </div>
              <span className=" font-spoof text-2xl">
                Provide us with screener
              </span>
              <span className=" font-spoof text-lg">
                A customer support agent will be reaching out to collect from
                your the screener details
              </span>
            </div>

            <div className="bg-white rounded-md flex flex-col items-center justify-center w-[421px] h-[246px] p-3">
              <div className="bg-dark-red rounded-[30px] font-spoof h-14 w-14 flex items-center justify-center">
                3
              </div>
              <span className=" font-spoof text-2xl">
                Scheduling the interview
              </span>
              <span className=" font-spoof text-lg">
                We will ask you provide your schedule and timeline to get your
                interview ready
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-[150px]">
            <img src={cat} alt="cat" />
            <div className="px-2">
              <div className=" font-spoof text-[21px] text-white">
                Do you need help?
              </div>
              <div className=" font-avenir text-[15px] text-white w-[350px] py-4">
                We provide free consolation that will asses you with the best
                method to research
              </div>
              <div className="flex items-center justify-center rounded-[41px] bg-yellow text-lg h-[49px] w-[200px]">
                Talk to an expert
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-40 "> hi</div>
      </div>
      <Faqs/>
      <GoSales/>
    </Layout>
  );
};

export default Home;
