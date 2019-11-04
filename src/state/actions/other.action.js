export const ADD_CATEGORY = 'ADD_CATEGORY';

export const  AddCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: category
    }
}
