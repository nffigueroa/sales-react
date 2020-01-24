export const LIST_PRODUCT = 'LIST_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATEFORM_PRODUCT = 'UPDATEFORM_PRODUCT';
export const UPDATEFORM_PRODUCTONE = 'UPDATEFORM_PRODUCT1B1';

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

export const DeleteProduct = (idProducto) => {
    return {
        type: DELETE_PRODUCT,
        payload: idProducto
    }
}

export const UpdateForm = (product) => {
    return {
            type: UPDATEFORM_PRODUCT,
            payload: product
    }
}
export const UpdateFormOne = (product) => {
    return {
            type: UPDATEFORM_PRODUCTONE,
            payload: product
    }
}

export const UpdateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}
