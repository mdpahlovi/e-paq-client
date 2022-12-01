// setStored Card Quantity
export const setQuantity = (data, storedCart) => {
    const savedCart = [];
    for (const id in storedCart) {
        const addedProduct = data.find((product) => product._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
};
