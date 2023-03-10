import React from "react";
import FaqCard from "./FaqCard";

const Faqs = () => {
  return (
    <div id="faqs" className="hidden flex-col items-center justify-center gap-6 font-spoof mt-20 xl:flex py-5 overflow-hidden">
      <span className="py-4 text-[41px]">FAQs</span>
      <FaqCard text="What kind of researches criteria that you support?"/>
      <FaqCard text="How expensive is UserResearch?"/>
      <FaqCard text="How are participants compensated?"/>
      <FaqCard text="How does the platform ensure user privacy and data security?"/>
      <FaqCard text="How long do studies typically last?"/>
      <FaqCard text="How do companies benefit from using UserResearch?"/>
      <FaqCard text="Do you offer Researchers to help me out with me research project?"/>
    </div>
  );
};

export default Faqs;
