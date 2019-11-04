import axios from 'axios';
import { PORT, endPoint } from '../util/const';

/**
 * It gets the list of products
 */
export const getClientByIdSucursal = (idSucursal) => {
    return axios.get(`${endPoint}:${PORT}/client/${idSucursal}`);
}