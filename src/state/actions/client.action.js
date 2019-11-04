export const ADD_CLIENT = 'ADD_CLIENT';

export const  AddClient = (client) => {
    return {
        type: ADD_CLIENT,
        payload: client
    }
}
