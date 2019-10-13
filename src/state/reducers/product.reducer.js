import { ADD_PRODUCT } from '../actions/product.action';

export const ProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT:
            return {
                ...state,
                listProduct: {
                    ...payload
                }
            }
        default:
            return state;
    }
}