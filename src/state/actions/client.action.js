export const ADD_CLIENT = 'ADD_CLIENT'
export const LIST_CLIENT = 'LIST_CLIENT'
export const DELETE_CLIENT = 'DELETE_CLIENT'
export const UPDATE_CLIENT = 'UPDATE_CLIENT'
export const UPDATEFORM_CLIENT = 'UPDATEFORM_CLIENT'
export const UPDATEFORM_CLIENTONE = 'UPDATEFORM_CLIENT1B1'

export const AddClient = (client) => {
  return {
    type: ADD_CLIENT,
    payload: client
  }
}

export const ListClient = (client) => {
  return {
    type: LIST_CLIENT,
    payload: client
  }
}

export const DeleteClient = (idClient) => {
  return {
    type: DELETE_CLIENT,
    payload: idClient
  }
}

export const UpdateFormClient = (client) => {
  return {
    type: UPDATEFORM_CLIENT,
    payload: client
  }
}
export const UpdateFormOneClient = (client) => {
  return {
    type: UPDATEFORM_CLIENTONE,
    payload: client
  }
}

export const UpdateClient = (client) => {
  return {
    type: UPDATE_CLIENT,
    payload: client
  }
}
