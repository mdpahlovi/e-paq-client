import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loadData } from "./Utilities/loadData";
import Main from "./layouts/Main";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Review from "./components/Review";
import CheckOut from "./components/CheckOut";
import Inventory from "./components/Inventory";
import About from "./components/About";
import Contact from "./components/Contact";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    loader: loadData,
                    element: (
                        <>
                            <Hero></Hero>
                            <Shop />
                        </>
                    ),
                },
                {
                    path: "review",
                    loader: loadData,
                    element: <Review />,
                },
                {
                    path: "inventory",
                    element: <Inventory />,
                },
                {
                    path: "checkout",
                    element: <CheckOut />,
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
