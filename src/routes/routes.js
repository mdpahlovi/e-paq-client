import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Hero from "../components/Hero";
import Shop from "../pages/Shop";
import Review from "../pages/Review";
import CheckOut from "../pages/CheckOut";
import Inventory from "../pages/Inventory";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import PrivateRoute from "../routes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",

                element: (
                    <>
                        <Hero></Hero>
                        <Shop />
                        <Contact />
                    </>
                ),
            },
            {
                path: "/review",

                element: <Review />,
            },
            {
                path: "/inventory",
                element: <Inventory />,
            },
            {
                path: "/checkout",
                element: (
                    <PrivateRoute>
                        <CheckOut />
                    </PrivateRoute>
                ),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
        ],
    },
]);
