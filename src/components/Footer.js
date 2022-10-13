import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-accent section-gap content-gap gap-4 sm:gap-6 lg:gap-10 text-base-100">
            <div className="my-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 sm:gap-6 lg:gap-10">
                <div className="content-gap gap-2 col-span-full lg:col-auto">
                    <a href="/" className="text-2xl font-bold">
                        E-PAQ
                    </a>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam.
                    </p>
                    <p>
                        Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                </div>
                <div className="content-gap gap-2">
                    <p className="text-2xl font-bold">Contacts</p>
                    <h5>
                        Phone : <a href="tel:01736817612"> 01736817612</a>
                    </h5>
                    <h5>
                        Email : <a href="mailto:mdpahlovi07@gmail.com"> mdpahlovi07@gmail.com</a>
                    </h5>
                    <h5>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                            Address : 312 C&B Road, Barisal, Bangladesh.
                        </a>
                    </h5>
                </div>
                <div className="content-gap">
                    <span className="text-2xl font-bold">Social</span>
                    <div className="flex gap-2">
                        <a href="/" className="text-2xl">
                            <AiFillFacebook />
                        </a>
                        <a href="/" className="text-2xl">
                            <AiFillInstagram />
                        </a>
                        <a href="/" className="text-2xl">
                            <AiFillTwitterSquare />
                        </a>
                    </div>
                    <p>Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.</p>
                </div>
            </div>
            <hr />
            <div className="my-container flex flex-col-reverse justify-between lg:flex-row">
                <p className="font-semibold">© Copyright 2022 E-PAQ Inc. All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/" className="font-semibold">
                            F.A.Q
                        </a>
                    </li>
                    <li>
                        <a href="/" className="font-semibold">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="/" className="font-semibold">
                            Terms &amp; Conditions
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
