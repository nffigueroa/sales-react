export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_MARK = 'ADD_MARK';
export const ADD_PRESENTATION = 'ADD_PRESENTATION';

export const  AddCategory = (category) => {
    return {
        type: ADD_CATEGORY,
        payload: category
    }
}

export const AddMark = (mark) => {
    return {
        type: ADD_MARK,
        payload: mark
    }
}

export const AddPresentation = (presentation) => {
    return {
        type: ADD_PRESENTATION,
        payload: presentation
    }
}

