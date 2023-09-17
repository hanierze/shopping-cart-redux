const shorten = (text) => {
    const arr = text?.split(" ");
    return arr.length>1 ? `${arr[0]} ${arr[1]}` : arr;
};

const isInCart = (state, id) => {
    const res = !!state.selectedItems.find((item) => item.id === id);
    return res;
};

const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex((item) => item.id === id);
    if (index === -1) return false;
    else {
        return state.selectedItems[index].quantity;
    }
};

export { shorten, isInCart, quantityCount };