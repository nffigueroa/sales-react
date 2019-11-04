import { ADD_CATEGORY } from '../actions/other.action';

export const OtherReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: payload
            }
        default:
            return state;
    }
}