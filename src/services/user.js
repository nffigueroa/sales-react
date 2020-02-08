import axios from 'axios';
import { endPoint, PORT, API_VERSION } from '../util/const';

export const loginProcess = (userName, password) => {
    
    return axios.post(`${endPoint}:${PORT}/${API_VERSION}/auth`, {
        userName, 
        password
    })
}

