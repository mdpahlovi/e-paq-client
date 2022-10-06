import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Order from "./components/Order";
import Review from "./components/Review";
import Inventory from "./components/Inventory";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: (
                        <>
                            <Hero></Hero>
                            <Products></Products>
                        </>
                    ),
                },
                {
                    path: "order",
                    element: <Order></Order>,
                },
                {
                    path: "review",
                    element: <Review></Review>,
                },
                {
                    path: "inventory",
                    element: <Inventory></Inventory>,
                },
                {
                    path: "about",
                    element: <About></About>,
                },
                {
                    path: "contact",
                    element: <Contact></Contact>,
                },
            ],
        },
        {
            path: "login",
            element: <Login></Login>,
        },
    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
