import React, { useState } from "react";
import Logo from "../images/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    const activeNavLink = "text-lg text-light font-bold";
    const normalNavLink = "text-light";

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
                        <NavLink to="/" className={({ isActive }) => (isActive ? activeNavLink : normalNavLink)} end>
                            Order
                        </NavLink>
                        <NavLink to="review" className={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}>
                            Order Review
                        </NavLink>
                        <NavLink
                            to="inventory"
                            className={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}
                        >
                            Manage Inventory
                        </NavLink>
                        <NavLink to="about" className={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}>
                            About
                        </NavLink>
                        <NavLink to="contact" className={({ isActive }) => (isActive ? activeNavLink : normalNavLink)}>
                            Contact
                        </NavLink>
                        <NavLink to="login" className="btn btn-primary">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
