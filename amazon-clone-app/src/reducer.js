export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_ITEM_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_ITEM_FROM_BASKET":

            return {...state}
    
        default:
            return state;
    }
}

export default reducer;