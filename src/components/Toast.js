import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../context/UserContext";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
    const { theme } = useContext(AuthContext);

    return <ToastContainer position="top-right" autoClose={1500} theme={theme} />;
};

export default Toast;
