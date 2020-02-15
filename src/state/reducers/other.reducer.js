import { ADD_CATEGORY, ADD_MARK, ADD_PRESENTATION, ADD_MEASUREMENT, ADD_CITIES, CURRENT_MENU, CURRENT_MENU_ITEM } from '../actions/other.action'

export const OtherReducer = (state = {}, { type, payload }) => {
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
    case ADD_CITIES:
      return {
        ...state,
        cities: payload
      }
    case CURRENT_MENU: 
      return {
        menu: {
          currentMenu: payload
        }    
      }
    case CURRENT_MENU_ITEM: 
    return {
      menu: {
        ...state.menu,
        currentMenuItem: payload
      }    
    }
    default:
      return state
  }
}
