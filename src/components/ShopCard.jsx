import React from "react";
import ShowRating from "../Utilities/ShowRating";
import { MdShoppingCart } from "react-icons/md";

const ShopCard = ({ product, handelAddToCard }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="border border-base-200 rounded-lg flex flex-col justify-between">
            <img className="rounded-t-lg w-auto" src={img} alt="" />
            <div className="flex flex-col gap-1 p-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <h4 className="text-lg font-semibold">Price: ${price}</h4>
                <div className="mt-2">
                    <p className="text-sm">Manufacture: {seller}</p>
                    <p className="icon justify-start">
                        Rating:{" "}
                        <span className="text-primary flex">
                            <ShowRating ratings={ratings}></ShowRating>
                        </span>
                    </p>
                </div>
            </div>
            <button className="icon btn btn-success rounded-t-none" onClick={() => handelAddToCard(product)}>
                Add To Card
                <span>
                    <MdShoppingCart />
                </span>
            </button>
        </div>
    );
};

export default ShopCard;
