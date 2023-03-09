import React from "react";
import Outline from "../layout";
import { bgYellow3, left, right } from "../assets/img";
import { teamInfo, TeamCard } from "../components/team";
import { GoSales } from "../components/home";

const Team = () => {
    return (
        <Outline>
            <div className="relative">
                <img className="absolute w-full 3xl:h-[1100px]" src={bgYellow3} alt="bgyellow" />
                <div className="relative pb-32 3xl:mb-40">
                    <div className=" text-center text-4xl 3xl:text-8xl text-purple lg:text-6xl font-spoof px-32 pt-20">
                        Our <span className=" text-orange"> team </span> is ready <br />to help you!
                    </div>
                    <div className="text-center text-lg font-avenir py-10 3xl:text-2xl">
                        We love what we do and we do it with passion. We value the experimentation <br/> of the message and smart incentives.
                    </div>
                    <div className="flex flex-col justify-center gap-10 items-center lg:flex-row">
                        {teamInfo.map(item => <TeamCard {...item}/>)}
                    </div>
                    <div className="flex justify-between p-10">
                        <img src={left} alt="left"/>
                        <img src={right} alt="right"/>
                    </div>
                </div>
                <GoSales/>
            </div>
        </Outline>
    )
}

export default Team;