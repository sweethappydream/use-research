import React from "react";

const BlackCard = ({title}) => {
    return (
        <div className="px-[11px] py-[8px] text-sm w-fit text-white rounded-3xl bg-black inline-block m-1">
            {title}
        </div>
    )
}

export default BlackCard;