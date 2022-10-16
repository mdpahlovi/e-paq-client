import React, { useState } from "react";
import { MdRateReview } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { SiClickup } from "react-icons/si";
import { GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";

const OrderSummary = ({ card, removeAll, toggleOrderReviewBtn }) => {
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
                <div className="bg-success w-full sm:w-64 fixed sm:sticky sm:top-16 lg:top-20 bottom-0 left-0 p-5 content-gap rounded-lg">
                    <h3 className="text-xl text-center font-semibold">Order Summary</h3>
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Total Shipping Cost: ${totalShippingCharge}</p>
                    <p>Tax: ${totalTax.toFixed(2)}</p>
                    <h3 className="text-xl text-center font-semibold">Grand Total: ${total}</h3>
                    <button className="icon btn btn-error text-white" onClick={removeAll}>
                        Clear Card
                        <AiOutlineClear />
                    </button>
                    <Link to="review" className={`icon btn btn-info text-white ${toggleOrderReviewBtn}`}>
                        Review Order
                        <MdRateReview />
                    </Link>
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
