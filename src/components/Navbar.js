import React, { useState } from "react";
import Logo from "../images/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav className="bg-dark sticky top-0 z-10">
            <div className="my-container h-16 lg:h-20 flex justify-between items-center">
                <div>
                    <img className="w-20 lg:w-24" src={Logo} alt="" />
                </div>
                <div className="lg:hidden">
                    <span
                        className="text-white text-3xl cursor-pointer"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {open ? <CgMenuRight /> : <CgClose />}
                    </span>
                </div>
                <div
                    className={`bg-dark w-full fixed lg:static top-16 left-0 right-0 pb-5 lg:pb-0 -translate-y-full ${
                        open ? "hidden" : "block translate-y-0"
                    } lg:block lg:translate-y-0`}
                >
                    <div className="flex flex-col lg:flex-row justify-end items-center gap-x-5 gap-y-3">
                        <Link to="/" className="text-light">
                            Order
                        </Link>
                        <Link to="review" className="text-light">
                            Order Review
                        </Link>
                        <Link to="inventory" className="text-light">
                            Manage Inventory
                        </Link>
                        <Link to="about" className="text-light">
                            About
                        </Link>
                        <Link to="contact" className="text-light">
                            Contact
                        </Link>
                        <Link to="login" className="btn btn-primary">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
