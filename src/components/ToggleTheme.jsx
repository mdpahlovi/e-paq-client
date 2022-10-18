import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ToggleTheme = () => {
    let dataTheme = document.documentElement.attributes[0];
    const [toggle, setToggle] = useState(true);
    const toggleTheme = () => {
        setToggle(!toggle);
        if (dataTheme.value === "light") {
            dataTheme.value = "dark";
        } else {
            dataTheme.value = "light";
        }
    };
    return (
        <>
            <label className="swap swap-rotate">
                <input onClick={toggleTheme} type="checkbox" />
                <MdLightMode className="swap-off text-3xl"></MdLightMode>
                <MdDarkMode className="swap-on text-3xl"></MdDarkMode>
            </label>
        </>
    );
};

export default ToggleTheme;
