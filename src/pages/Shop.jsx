import React, { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import OrderSummary from "../components/OrderSummary";
import { addToLoaclDb, removeAllToDB } from "../utilities/handelLocalDB";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import { getStoredProducts } from "../apis/products";
import { setQuantity } from "../utilities/products";

const Shop = () => {
    // const { products, count } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);
    const pages = Math.ceil(count / size);

    useEffect(() => {
        const url = `https://epaq-server.vercel.app/products?page=${page}&size=${size}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setCount(data.count);
                setProducts(data.products);
            });
    }, [page, size]);

    useEffect(() => {
        getStoredProducts()
            .then(({ data, storedCart }) => {
                const savedCart = setQuantity(data, storedCart);
                setCart(savedCart);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [products]);

    const handelAddToCard = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find((product) => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToLoaclDb(selectedProduct._id);
    };

    // Remove Card to display
    const removeAll = () => {
        setCart([]);
        removeAllToDB();
    };

    return (
        <div className="my-container pt-0 section-gap content-gap">
            <h1 className="heading-text text-center">
                Our Latest <span className="text-primary">Collection</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempore assumenda ut neque. Illo ipsa repellat numquam amet possimus deserunt
                natus soluta cumque.
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-[auto_16rem] gap-5">
                <div className={`grid gap-5 ${loading ? "animate-pulse" : ""}`} style={{ gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )" }}>
                    {loading
                        ? [...Array(12)].map((name, index) => <div key={index} className="w-full h-80 bg-base-content/5 rounded-lg"></div>)
                        : products.map((product) => <ShopCard key={product._id} product={product} handelAddToCard={handelAddToCard} />)}
                </div>
                <OrderSummary card={cart} removeAll={removeAll}>
                    <Link className="btn btn-info icon" to="/review">
                        Review Order
                        <MdRateReview />
                    </Link>
                </OrderSummary>
            </div>
            <div className="flex justify-center gap-6 mt-8">
                <div className="btn-group">
                    {[...Array(pages).keys()].map((number) => (
                        <button key={number} className={page === number ? "btn btn-active" : "btn"} onClick={() => setPage(number)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
                <select onChange={(event) => setSize(event.target.value)} className="select focus:outline-none text-accent bg-primary" defaultValue={12}>
                    <option value="8">8</option>
                    <option value="12" selected>
                        12
                    </option>
                    <option value="16">16</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;
