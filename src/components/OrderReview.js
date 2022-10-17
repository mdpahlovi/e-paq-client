import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeToCard, removeToLoaclDb } from "../Utilities/addOrRemoveToDb";
import OrderSummary from "./OrderSummary";
import Review from "./Review";
import { BsCartCheckFill } from "react-icons/bs";

const OrderReview = () => {
    const dynamicBtn = { route: "chechout", text: "Proceed Checkout", icon: <BsCartCheckFill /> };

    const { initialCart } = useLoaderData();

    const [card, setCard] = useState(initialCart);

    // Remove This Card to display
    const removeThisCard = (id) => {
        const restCard = card.filter((card) => card.id !== id);
        setCard(restCard);
        removeToLoaclDb(id);
    };

    // Remove All Card to display
    const removeAll = () => {
        setCard([]);
        removeToCard();
    };

    return (
        <div className="my-container section-gap content-gap">
            <h1 className="heading-text text-center">
                Your Selected <span className="text-accent">Product</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempore assumenda ut neque. Illo ipsa
                repellat numquam amet possimus deserunt natus soluta cumque.
            </p>
            <div className="flex gap-5">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {card.map((selectedProduct) => (
                        <Review
                            key={selectedProduct.id}
                            product={selectedProduct}
                            removeThisCard={removeThisCard}
                        ></Review>
                    ))}
                </div>
                <OrderSummary card={card} removeAll={removeAll} dynamicBtn={dynamicBtn}></OrderSummary>
            </div>
        </div>
    );
};

export default OrderReview;
