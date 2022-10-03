import React, { useState } from "react";
import Logo from "../images/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";

const Navbar = () => {
    const menu = ["Order", "Order Review", "Manage Inventory", "Contact US"];

    const [open, setOpen] = useState(true);

    return (
        <nav className="bg-dark sticky top-0 z-10">
            <div className="my-container grid grid-cols-[auto_auto] grid-rows-[4rem] md:grid-rows-[5rem] items-center">
                <div>
                    <img className="w-20 md:w-24" src={Logo} alt="" />
                </div>
                <div className="md:hidden flex justify-end">
                    <span
                        className="text-white text-3xl cursor-pointer"
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        {open ? <CgMenuRight /> : <CgClose />}
                    </span>
                </div>
                <div className={`col-span-full md:col-auto ${open ? "hidden" : "block"} md:block pb-5 md:pb-0`}>
                    <div className="flex flex-col md:flex-row justify-end items-center gap-x-5 gap-y-3">
                        {menu.map((menuItem, index) => (
                            <h3 key={index} className="cursor-pointer text-light">
                                {menuItem}
                            </h3>
                        ))}
                        <h3 className="btn btn-primary cursor-pointer">Login</h3>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
