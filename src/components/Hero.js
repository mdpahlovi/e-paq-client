import React from "react";
import HeroImage from "../images/hero.jpg";

const Hero = () => {
    return (
        <header className="my-container section-gap grid grid-cols-1 md:grid-cols-[auto_auto] items-center gap-y-6 sm:gap-y-10 md:gap-0">
            <div className="content-gap">
                <h1 className="heading-text">
                    Sale up to <span className="text-primary">70% off</span>
                </h1>
                <h1 className="heading-text">New Collection For Fall</h1>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <div>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <img className="w-3/4" src={HeroImage} alt="" />
            </div>
        </header>
    );
};

export default Hero;
