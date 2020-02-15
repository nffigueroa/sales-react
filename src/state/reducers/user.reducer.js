import { LOGIN_USER, ADD_USER_LOGGED } from '../actions/user.action'

export const UserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        userName: payload.userName,
        password: payload.password
      }
    case ADD_USER_LOGGED:
      return {
        ...state,
        userLogged: {
          ...payload
        }
      }
    default:
      return state
  }
}
