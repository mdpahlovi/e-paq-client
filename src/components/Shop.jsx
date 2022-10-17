import React, { useState } from "react";
import ShopCard from "./ShopCard";
import OrderSummary from "./OrderSummary";
import { addToLoaclDb, removeAllToDB } from "../Utilities/addOrRemoveToDb";
import { MdRateReview } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    const dynamicBtn = { route: "/review", text: "Review Order", icon: <MdRateReview /> };

    // Load Data
    const { products, initialCart } = useLoaderData();
    const [card, setCard] = useState(initialCart);

    // SetCard To Display
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

    // Remove Card to display
    const removeAll = () => {
        setCard([]);
        removeAllToDB();
    };

    return (
        <div className="my-container pt-0 section-gap content-gap">
            <h1 className="heading-text text-center">
                Our Latest <span className="text-primary">Collection</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempore assumenda ut neque. Illo ipsa
                repellat numquam amet possimus deserunt natus soluta cumque.
            </p>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-[auto_16rem] gap-5">
                <div className="grid gap-5" style={{ gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )" }}>
                    {products.map((product) => (
                        <ShopCard key={product.id} product={product} handelAddToCard={handelAddToCard}></ShopCard>
                    ))}
                </div>
                <OrderSummary card={card} removeAll={removeAll} dynamicBtn={dynamicBtn}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;
