import { ADD_CATEGORY, ADD_MARK, ADD_PRESENTATION, ADD_MEASUREMENT } from '../actions/other.action';

export const OtherReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: payload
            }
        case ADD_MARK: 
            return {
                ...state,
                mark: payload
            }
        case ADD_PRESENTATION:
            return {
                ...state,
                presentation: payload
            }
        case ADD_MEASUREMENT:
            return {
                ...state,
                measurement: payload
            }
        default:
            return state;
    }
}