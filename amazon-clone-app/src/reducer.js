export const basketItemSum = (basket) =>
basket?.reduce((amount, item) => item.price+amount, 0);

export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    console.log(action.user)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_ITEM_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_ITEM_FROM_BASKET":
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => action.id === basketItem.id)

            if(index>=0) {
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`The item with ${action.id} is not present in the basket`);
            }

            return {
                ...state,
                basket: newBasket
            }
    
        default:
            return state;
    }
}

export default reducer;