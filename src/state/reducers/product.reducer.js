import { LIST_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../actions/product.action';

export const ProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case LIST_PRODUCT:
            return {
                ...state,
                listProduct: payload
                
            }
        case ADD_PRODUCT: 
            return {
                ...state,
                form: {
                    ...state.form,
                    [payload.field]: payload.val
                }
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                listProduct: [...state.listProduct.filter((item) => item.id_Produccto !== payload)]
            }
        default:
            return state;
    }
}