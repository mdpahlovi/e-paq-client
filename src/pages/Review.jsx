import React, { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import OrderSummary from "../components/OrderSummary";
import { Link } from "react-router-dom";
import { removeAllToDB, removeSeletedCardToDB } from "../utilities/handelLocalDB";
import { BsCartCheckFill } from "react-icons/bs";
import { getStoredProducts } from "../apis/products";
import { setQuantity } from "../utilities/products";

const Review = () => {
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    // Get Cart By Stored Ids & Set Quantity
    useEffect(() => {
        getStoredProducts()
            .then(({ data, storedCart }) => {
                const savedCart = setQuantity(data, storedCart);
                setCard(savedCart);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, [refresh]);

    // Remove This Card to display
    const removeThisCard = (id) => {
        const restCard = card.filter((card) => card.id !== id);
        setCard(restCard);
        removeSeletedCardToDB(id);
        setRefresh(!refresh);
    };

    // Remove All Card to display
    const removeAll = () => {
        setCard([]);
        removeAllToDB();
        setRefresh(!refresh);
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
            <div className="grid grid-cols-1 sm:grid-cols-[auto_16rem] gap-5">
                <div className={`grid grid-cols-1 xl:grid-cols-2 gap-5 ${loading ? "animate-pulse" : ""}`}>
                    {loading
                        ? [...Array(4)].map((name, index) => <div key={index} className="w-full h-40 bg-base-content/5  rounded-lg"></div>)
                        : card.map((selectedProduct) => (
                              <ReviewCard key={selectedProduct._id} product={selectedProduct} removeThisCard={removeThisCard}></ReviewCard>
                          ))}
                </div>
                <OrderSummary card={card} removeAll={removeAll}>
                    <Link className="btn btn-info icon" to="/checkout">
                        Proceed Checkout
                        <BsCartCheckFill />
                    </Link>
                </OrderSummary>
            </div>
        </div>
    );
};

export default Review;
