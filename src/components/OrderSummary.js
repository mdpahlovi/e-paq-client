import React from "react";
import { MdRateReview } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";

const OrderSummary = (props) => {
    const card = props.card;
    let totalPrice = 0;
    let totalShippingCharge = 0;
    let quantity = 0;

    for (const product of card) {
        quantity += product.quantity;
        totalPrice += product.price * quantity;
        totalShippingCharge += product.shipping * quantity;
    }
    const totalTax = totalPrice * 0.1;
    const total = totalPrice + totalShippingCharge + totalTax;

    return (
        <div className="w-full sm:w-64 fixed sm:sticky sm:top-16 md:top-20 bottom-0 left-0 bg-accentLight p-5 content-gap rounded-lg">
            <h3 className="text-xl text-center font-semibold">Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Cost: ${totalShippingCharge}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h3 className="text-xl text-center font-semibold">Grand Total: ${total}</h3>
            <button className="icon btn bg-[#FF3030] text-white">
                Clear Card
                <AiOutlineClear />
            </button>
            <button className="icon btn bg-[#FF9900] text-white">
                Review Order
                <MdRateReview />
            </button>
        </div>
    );
};

export default OrderSummary;
