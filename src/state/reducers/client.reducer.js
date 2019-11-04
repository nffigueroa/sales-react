import { ADD_CLIENT } from "../actions/client.action";


export const ClientReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_CLIENT:
            return {
                ...state,
                listClient: payload
                
            }
        default:
            return state;
    }
}