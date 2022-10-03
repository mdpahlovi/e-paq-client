import React from "react";
import { MdShoppingCart } from "react-icons/md";

const Product = ({ product, handelAddToCard }) => {
    const { img, name, price, seller, ratings } = product;
    return (
        <div className="border rounded-lg flex flex-col justify-between">
            <img className="rounded-t-lg w-auto" src={img} alt="" />
            <div className="flex flex-col gap-1 p-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <h4 className="text-lg font-semibold">Price: ${price}</h4>
                <div className="mt-2">
                    <p className="text-sm">Manufacture: {seller}</p>
                    <p className="text-sm">Rating: {ratings} star</p>
                </div>
            </div>
            <button className="icon btn bg-accentLight rounded-t-none" onClick={() => handelAddToCard(product)}>
                Add To Card
                <span>
                    <MdShoppingCart />
                </span>
            </button>
        </div>
    );
};

export default Product;
