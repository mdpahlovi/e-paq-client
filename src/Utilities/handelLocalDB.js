const addToLoaclDb = (id) => {
    const card = getStoredCart();
    const quantity = card[id];
    if (quantity) {
        card[id] = quantity + 1;
    } else {
        card[id] = 1;
    }
    localStorage.setItem("card", JSON.stringify(card));
};

const getStoredCart = () => {
    let card = {};
    const stroedCard = localStorage.getItem("card");
    if (stroedCard) {
        card = JSON.parse(stroedCard);
    }
    return card;
};

const removeSeletedCardToDB = (id) => {
    const stroedCard = localStorage.getItem("card");
    if (stroedCard) {
        const card = JSON.parse(stroedCard);
        if (id in card) {
            delete card[id];
            localStorage.setItem("card", JSON.stringify(card));
        }
    }
};

const removeAllToDB = () => {
    localStorage.removeItem("card");
};

export { getStoredCart, addToLoaclDb, removeSeletedCardToDB, removeAllToDB };
