import React, { useState } from "react";
import { removeToCard } from "../Utilities/addOrRemoveToDb";
import { MdRateReview } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { SiClickup } from "react-icons/si";
import { GoEyeClosed } from "react-icons/go";

const OrderSummary = ({ card }) => {
    // Calculation
    let totalPrice = 0;
    let totalShippingCharge = 0;
    let quantity = 0;

    for (const product of card) {
        quantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalShippingCharge += product.shipping * product.quantity;
    }
    const totalTax = totalPrice * 0.1;
    const total = totalPrice + totalShippingCharge + totalTax;

    // Toggle Summary Tab
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className={`${toggle ? "hidden" : "block"} sm:block`}>
                <div className="w-full sm:w-64 fixed sm:sticky sm:top-16 lg:top-20 bottom-0 left-0 bg-accentLight p-5 content-gap rounded-lg">
                    <h3 className="text-xl text-center font-semibold">Order Summary</h3>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Cost: ${totalShippingCharge}</p>
                    <p>Tax: ${totalTax.toFixed(2)}</p>
                    <h3 className="text-xl text-center font-semibold">Grand Total: ${total}</h3>
                    <button className="icon btn bg-[#FF3030] text-white" onClick={removeToCard}>
                        Clear Card
                        <AiOutlineClear />
                    </button>
                    <button className="icon btn bg-[#FF9900] text-white">
                        Review Order
                        <MdRateReview />
                    </button>
                </div>
            </div>
            <span
                className="fixed bottom-2 right-2 text-2xl border-2 border-dark rounded-full p-1 cursor-pointer sm:hidden"
                onClick={() => setToggle(!toggle)}
            >
                {toggle ? <SiClickup /> : <GoEyeClosed />}
            </span>
        </>
    );
};

export default OrderSummary;
