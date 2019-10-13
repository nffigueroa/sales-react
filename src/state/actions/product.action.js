export const ADD_PRODUCT = 'ADD_PRODUCT';

export const  AddProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
