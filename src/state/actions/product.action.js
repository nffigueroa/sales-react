export const LIST_PRODUCT = 'LIST_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';

export const  ListProduct = (product) => {
    return {
        type: LIST_PRODUCT,
        payload: product
    }
}

export const AddProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
