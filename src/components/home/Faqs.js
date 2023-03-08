import React from "react";
import FaqCard from "./FaqCard";

const Faqs = () => {
  return (
    <div className="hidden flex-col items-center justify-center gap-6 font-spoof mt-20 xl:flex py-5">
      <span className="py-4 text-[41px]">FAQs</span>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="What kind of researches criteria that you support?"/>
    </div>
  );
};

export default Faqs;
