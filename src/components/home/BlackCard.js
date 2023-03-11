import React from "react";

const BlackCard = ({title}) => {
    return (
        <div className="py-2 xl:py-3 px-2 xl:px-4 text-sm xl:text-lg text-white rounded-3xl bg-black">
            {title}
        </div>
    )
}

export default BlackCard;