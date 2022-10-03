import React, { useEffect, useState } from "react";
import { addToLoaclDb, getStroadCard } from "../Utilities/addOrRemoveToDb";
import Product from "./Product";
import OrderSummary from "./OrderSummary";
import { SiClickup } from "react-icons/si";
import { GoEyeClosed } from "react-icons/go";

const Products = () => {
    // Load Data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = "products.json";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // LocalStored Card
    useEffect(() => {
        const stroadCard = getStroadCard();
        const savedCard = [];
        for (const id in stroadCard) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = stroadCard[id];
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct);
            }
        }
        setCard(savedCard);
    }, [products]);

    // SetCard To Display
    const [card, setCard] = useState([]);
    const handelAddToCard = (selectedProduct) => {
        let newCard = [];
        const exists = card.find((product) => product === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCard = [...card, selectedProduct];
        } else {
            const rest = card.filter((product) => product.id !== selectedProduct.id);
            selectedProduct += 1;
            newCard = [...rest, selectedProduct];
        }

        setCard(newCard);
        addToLoaclDb(selectedProduct.id);
    };

    // Toggle Summary Tab
    const [toggle, setToggle] = useState(true);

    return (
        <div className="my-container section-gap content-gap">
            <h1 className="heading-text text-center">
                Our Latest <span className="text-accent">Collection</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempore assumenda ut neque. Illo ipsa
                repellat numquam amet possimus deserunt natus soluta cumque.
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-[auto_16rem] gap-5">
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )" }}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} handelAddToCard={handelAddToCard}></Product>
                    ))}
                </div>
                <div className={`${toggle ? "hidden" : "block"} sm:block`}>
                    <OrderSummary card={card}></OrderSummary>
                </div>
            </div>
            <span
                className="fixed bottom-2 right-2 text-2xl border-2 border-dark rounded-full p-1 cursor-pointer sm:hidden"
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? <SiClickup /> : <GoEyeClosed />}
            </span>
        </div>
    );
};

export default Products;
