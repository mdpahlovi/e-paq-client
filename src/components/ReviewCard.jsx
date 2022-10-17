import React from "react";
import { RiDeleteBin5Fill, RiArrowDownCircleFill, RiArrowUpCircleFill } from "react-icons/ri";

const ReviewCard = ({ product, removeThisCard }) => {
    const { id, img, name, price, shipping, quantity } = product;
    return (
        <div className="p-3 h-max flex gap-3 items-center border rounded-lg">
            <img className="w-32 rounded-lg" src={img} alt="" />
            <div className="w-full">
                <h5 className="text-lg font-bold line-clamp-2 group-hover:line-clamp-none">{name}</h5>
                <p className="group-hover:hidden text-lg font-bold text-primary">
                    Q<span className="hidden xs:inline-block">uantity</span> : {quantity}
                </p>
                <p className="group-hover:hidden">
                    P<span className="hidden xs:inline-block">rice</span> : ${price}
                </p>
                <p className="group-hover:hidden">
                    S<span className="hidden xs:inline-block">hipping</span> : ${shipping}
                </p>
            </div>
            <div className="flex flex-col gap-2 text-2xl">
                <button className="text-accent">
                    <RiArrowUpCircleFill />
                </button>
                <button onClick={() => removeThisCard(id)} className="text-[#FF3030]">
                    <RiDeleteBin5Fill />
                </button>
                <button className="text-accent">
                    <RiArrowDownCircleFill />
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
