import { getStoredCart } from "../utilities/handelLocalDB";

// Get Products By Stored Ids
export const getStoredProducts = async () => {
    const storedCart = getStoredCart();
    const ids = Object.keys(storedCart);
    const response = await fetch(`https://epaq-server.vercel.app/productsByIds`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(ids),
    });
    const data = await response.json();
    return { data, storedCart };
};
