import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { loadData } from "./Utilities/loadData";
import OrderReview from "./components/OrderReview";
import Inventory from "./components/Inventory";
import About from "./components/About";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Chechout from "./components/Chechout";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: (
                        <>
                            <Hero></Hero>
                            <Products />
                        </>
                    ),
                },
                {
                    path: "review",
                    loader: loadData,
                    element: <OrderReview />,
                },
                {
                    path: "inventory",
                    element: <Inventory />,
                },
                {
                    path: "chechout",
                    element: <Chechout />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "login",
                    element: <LogIn />,
                },
                {
                    path: "signup",
                    element: <SignUp />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
