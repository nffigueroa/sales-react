import axios from 'axios';
import { PORT, endPoint, API_VERSION } from '../util/const';

/**
 * It gets the list of products
 */
export const getProductsList = (idSucursal) => {
    return axios.get(`${endPoint}:${PORT}/${API_VERSION}/product/${idSucursal}`);
}

export const saveProduct = (payload) => {
    return axios.post(`${endPoint}:${PORT}/${API_VERSION}/product`, payload);
}

export const updateProduct = (payload) => {
    return axios.put(`${endPoint}:${PORT}/${API_VERSION}/product`, payload);
}

export const deleteProduct = (idProducto) => {
    return axios.delete(`${endPoint}:${PORT}/${API_VERSION}/product/${idProducto}`);
}
