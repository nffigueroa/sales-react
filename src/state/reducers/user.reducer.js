import { ADD_USER, LOGIN_USER } from '../actions/user.action';

export const UserReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                payload: {
                        userName : payload.userName,
                        password: payload.password
                }
            }
        default:
            return state;
    }
}