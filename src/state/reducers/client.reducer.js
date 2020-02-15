import {
  ADD_CLIENT,
  LIST_CLIENT,
  DELETE_CLIENT,
  UPDATEFORM_CLIENT,
  UPDATEFORM_CLIENTONE,
  UPDATE_CLIENT
} from '../actions/client.action'

export const ClientReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_CLIENT:
      return {
        ...state,
        listClient: payload

      }
    case LIST_CLIENT:
      return {
        ...state,
        listClient: payload

      }
    case ADD_CLIENT:
      return {
        ...state,
        listClient: [
          ...state.listClient,
          payload
        ]
      }
    case DELETE_CLIENT:
      return {
        ...state,
        listClient: [...state.listClient.filter((item) => item.id_Produccto !== payload)]
      }
    case UPDATEFORM_CLIENT:
      return {
        ...state,
        form: payload
      }
    case UPDATEFORM_CLIENTONE:
      return {
        ...state,
        form: {
          ...state.form,
          [Object.keys(payload)[0]]: payload[Object.keys(payload)[0]]
        }
      }
    case UPDATE_CLIENT:
      const updatedClient = state.listClient.map(item => {
        if (item.id_Produccto === payload.id_Produccto) {
          item = payload
        }
        return item
      })
      return {
        ...state,
        listClient: updatedClient
      }
    default:
      return state
  }
}
