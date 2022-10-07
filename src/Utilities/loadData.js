import { getStroadCard } from "./addOrRemoveToDb";

const loadData = async () => {
    // get Products
    const productsData = await fetch("products.json");
    const products = await productsData.json();

    // get cart
    const savedCart = getStroadCard();
    const initialCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find((product) => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return { products: products, initialCart: initialCart };
};

export { loadData };
