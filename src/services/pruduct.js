import axios from 'axios';
import { PORT, endPoint } from '../util/const';

/**
 * It gets the list of products
 */
export const getProductsList = (idSucursal) => {
    return axios.get(`${endPoint}:${PORT}/product/${idSucursal}`);
}

export const saveProduct = (payload) => {
    return axios.post(`${endPoint}:${PORT}/product`, payload);
}

export const deleteProduct = (idProducto) => {
    return axios.delete(`${endPoint}:${PORT}/product/${idProducto}`);
}