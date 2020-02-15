export const ADD_CATEGORY = 'ADD_CATEGORY'
export const ADD_MARK = 'ADD_MARK'
export const ADD_PRESENTATION = 'ADD_PRESENTATION'
export const ADD_MEASUREMENT = 'ADD_MEASUREMENT'
export const ADD_CITIES = 'ADD_CITIES'
export const CURRENT_MENU = 'CURRENT_MENU'
export const CURRENT_MENU_ITEM = 'CURRENT_MENU_ITEM'

export const AddCategory = (category) => {
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

export const AddMeasurement = (measurement) => {
  return {
    type: ADD_MEASUREMENT,
    payload: measurement
  }
}

export const AddCities = (cities) => {
  return {
    type: ADD_CITIES,
    payload: cities
  }
}

export const CurrentMenu = (payload) => {
  return {
    type: CURRENT_MENU,
    payload: payload
  }
}

export const CurrentMenuItem = (payload) => {
  return {
    type: CURRENT_MENU_ITEM,
    payload: payload
  }
}
