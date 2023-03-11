import React from "react";
import { bgYellow3, left, right } from "../assets/img";
import { teamInfo, TeamCard } from "../components/team";
import { GoSales } from "../components/home";
import Slider from "react-slick";

const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: <img className=" top-10 w-[60px]" src={left} alt="left" />,
        nextArrow: <img className=" top-10 w-[80px]" src={right} alt="right" />
    };

    return (
        <>
            <div className="relative">
                <img className="absolute w-full 3xl:h-[1100px]" src={bgYellow3} alt="bgyellow" />
                <div className="relative pb-[145px] 3xl:mb-40">
                    <div className=" text-center text-4xl  text-purple lg:text-6xl font-spoof pt-20">
                        Our <span className=" text-orange"> team </span> is ready <br />to help you!
                    </div>
                    <div className="text-center text-lg font-avenir py-10 3xl:text-2xl">
                        We love what we do and we do it with passion. We value the experimentation <br /> of the message and smart incentives.
                    </div>
                    <div className=" px-4">
                        <Slider {...settings}>
                            {teamInfo.map(item => <TeamCard key={item.name} {...item} />)}
                            {teamInfo.map(item => <TeamCard key={item.name} {...item} />)}
                        </Slider>
                    </div>
                </div>
                <GoSales />
            </div>
        </>
    )
}

export default Team;