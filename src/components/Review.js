import React from "react";
import { RiDeleteBin5Fill, RiArrowDownCircleFill, RiArrowUpCircleFill } from "react-icons/ri";

const Review = ({ product, removeThisCard }) => {
    const { id, img, name, price, shipping } = product;
    return (
        <div className="h-max grid grid-cols-[8rem_auto_2rem] gap-3 items-center border rounded-lg">
            <img className="object-cover rounded-lg md:w-32" src={img} alt="" />
            <div className="group">
                <h5 className="text-lg font-bold line-clamp-2 group-hover:line-clamp-none">{name}</h5>
                <p className="group-hover:hidden md:group-hover:block">
                    P<span className="hidden xs:inline-block">rice</span> : ${price}
                </p>
                <p className="group-hover:hidden md:group-hover:block">
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

export default Review;
