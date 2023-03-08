import React from "react";

const FaqCard = ({text}) => {
    return (
        <div className="bg-yellow rounded-3xl flex items-center justify-between p-5 text-xl w-[900px]">
            {text}
            <div className="bg-dark-red flex items-center justify-center h-14 w-14 rounded-[30px] text-[31px] text-white">+</div>
        </div>
    )
}

export default FaqCard;