const initialState = {
    products: [],
    selected: {}
}

export default function reducer(state = initialState, action) {
    
    switch( action.type) {
        case "SET_PRODUCTS": {
            return {
                ...state,
                products: [
                    ...state.products,
                    ...action.payload
                ]
            }
        }
        case "DELETE_POSITION": {
            const cloneSelected = { ...state.selected };
            delete cloneSelected[action.payload.id];

            return {
                ...state,
                selected: cloneSelected
            }
        }
        case "ADD_POSITION": {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    [action.payload.id]: {
                        amount: action.payload.amount,
                        totallSum: action.payload.amount * action.payload.price,
                    }
                }
            }
        }
        case "DELETE_SELECTED_POSITIONS": {
            return {
                ...state,
                selected: {}
            }
        }
        default: 
            return state;
    }
    
}

