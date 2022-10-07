import React from "react";
import { useLoaderData } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import Review from "./Review";

const OrderReview = () => {
    const { initialCart } = useLoaderData();
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
                    {initialCart.map((selectedProduct) => (
                        <Review key={selectedProduct.id} product={selectedProduct}></Review>
                    ))}
                </div>
                <OrderSummary card={initialCart}></OrderSummary>
            </div>
        </div>
    );
};

export default OrderReview;
