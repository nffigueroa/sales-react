import axios from 'axios';
import { endPoint, PORT } from '../util/const';

export const loginProcess = (userName, password) => {
    
    return axios.post(`${endPoint}:${PORT}/auth`, {
        userName, 
        password
    })
}

