const initialCartState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false,
    quantity:0
  };

  const sumItems = (items) => {
    const itemCounter = items.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    const total = items
      .reduce((total, product) => {

        return total + product.attributes.price * product.quantity;
      }, 0)
      .toFixed(2);
  
    return { itemCounter, total };
  };
  

  const cartReducer = (state=initialCartState , action) => {
    switch (action.type) {
        case "ADD_ITEM":
          if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
            state.selectedItems.push({
              ...action.payload,
    
              quantity: 1,
            });
          }
          return {
            ...state,
            selectedItems: [...state.selectedItems],
            ...sumItems(state.selectedItems),
            checkout: false,
          };
        case "REMOVE_ITEM":
          const newSelectedItems = state.selectedItems.filter(
            (item) => item.id !== action.payload.id
          );
          return {
            ...state,
            selectedItems: [...newSelectedItems],
            ...sumItems(newSelectedItems),
          };
        case "INCREASE":
          const indexI = state.selectedItems.findIndex(
            (item) => item.id === action.payload.id
          );
          state.selectedItems[indexI].quantity++;
          return {
            ...state,
            ...sumItems(state.selectedItems),
          };
        case "DECREASE":
          const indexD = state.selectedItems.findIndex(
            (item) => item.id === action.payload.id
          );
          state.selectedItems[indexD].quantity--;
          return {
            ...state,
            ...sumItems(state.selectedItems),
          };
        case "CHECKOUT":
          return {
            selectedItems: [],
            itemCounter: 0,
            total: 0,
            checkout: true,
          };
        case "CLEAR":
          return {
            selectedItems: [],
            itemCounter: 0,
            total: 0,
            checkout: false,
          };
        default:
          return { ...state };
      }
  }

  export default cartReducer;
