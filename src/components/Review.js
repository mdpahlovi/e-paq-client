import React from "react";

const Review = ({ product }) => {
    const { img, name, price, shipping } = product;
    return (
        <div className="h-max flex flex-col md:flex-row md:items-center border rounded-lg">
            <img className="object-cover rounded-lg md:w-32" src={img} alt="" />
            <div className="flex flex-col p-3">
                <h5 className="text-lg font-bold">{name}</h5>
                <p>Price : {price}</p>
                <p>Shipping : {shipping}</p>
            </div>
        </div>
    );
};

export default Review;
