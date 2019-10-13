export const LOGIN_USER = 'LOGIN_USER';
export const ADD_USER_LOGGED = 'ADD_USER_LOGGED';

export const  LoginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export const  AddUser = (user) => {
    return {
        type: ADD_USER_LOGGED,
        payload: user
    }
}