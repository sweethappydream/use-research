import React, { useState } from "react";

const FaqCard = ({ text }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-yellow rounded-3xl p-5 text-xl sm:w-full lg:w-[900px]" data-aos="fade-up">
            <div className="flex items-center justify-between">
                {text} 
                <div className="bg-dark-red flex items-center justify-center px-3 h-10 w-10 md:h-14 md:w-14 rounded-[30px] text-[31px] text-white cursor-pointer" onClick={() => setOpen(!open)}>+</div>
            </div>
            <div className={`bg-yellow rounded-b-3xl overflow-hidden transition-[max-height] duration-300 ease-in ${open ? "max-h-[200px]" : "max-h-0"}`}>
                <div className={`h-[1px] w-full bg-[#f2e958] my-3`} />
                <div className={`text-md md:text-lg font-avenir`} >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
        </div>
    )
}

export default FaqCard;