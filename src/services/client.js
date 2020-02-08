import axios from 'axios';
import { PORT, endPoint, API_VERSION } from '../util/const';

/**
 * It gets the list of products
 */
export const getClientByIdSucursal = (idSucursal) => {
    return axios.get(`${endPoint}:${PORT}/${API_VERSION}/client/${idSucursal}`);
}

export const createNewClient = (body, idSucursal) => {
    return axios.post(`${endPoint}:${PORT}/${API_VERSION}/client/${idSucursal}`, body);
}