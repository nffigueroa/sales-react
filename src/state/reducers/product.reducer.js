import { ADD_PRODUCT } from '../actions/product.action';

export const ProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}