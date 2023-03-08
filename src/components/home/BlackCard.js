import React from "react";

const BlackCard = ({title}) => {
    return (
        <div className="py-3 px-4 text-sm xl:text-lg text-white rounded-3xl bg-black">
            {title}
        </div>
    )
}

export default BlackCard;