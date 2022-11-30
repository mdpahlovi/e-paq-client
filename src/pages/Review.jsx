import React, { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import OrderSummary from "../components/OrderSummary";
import { useLoaderData } from "react-router-dom";
import { removeAllToDB, removeSeletedCardToDB } from "../utilities/addOrRemoveToDb";
import { BsCartCheckFill } from "react-icons/bs";

const Review = () => {
    const dynamicBtn = { route: "/checkout", text: "Proceed Checkout", icon: <BsCartCheckFill /> };

    const { initialCart } = useLoaderData();
    const [card, setCard] = useState(initialCart);

    // Remove This Card to display
    const removeThisCard = (id) => {
        const restCard = card.filter((card) => card.id !== id);
        setCard(restCard);
        removeSeletedCardToDB(id);
    };

    // Remove All Card to display
    const removeAll = () => {
        setCard([]);
        removeAllToDB();
    };

    return (
        <div className="my-container section-gap content-gap">
            <h1 className="heading-text text-center">
                Your Selected <span className="text-primary">Product</span>
            </h1>
            <p className="max-w-xl mx-auto text-center max-h-[72px] overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum tempore assumenda ut neque. Illo ipsa repellat numquam amet possimus deserunt
                natus soluta cumque.
            </p>
            <div className="flex justify-center gap-5">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {card.map((selectedProduct) => (
                        <ReviewCard key={selectedProduct.id} product={selectedProduct} removeThisCard={removeThisCard}></ReviewCard>
                    ))}
                </div>
                <OrderSummary card={card} removeAll={removeAll} dynamicBtn={dynamicBtn}></OrderSummary>
            </div>
        </div>
    );
};

export default Review;
