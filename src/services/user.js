import { axios } from 'axios';

export const getUserInfoByID = (ID) => {
    return axios.post('/user', {
        ID
    })
}

