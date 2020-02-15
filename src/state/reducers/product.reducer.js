import { LIST_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATEFORM_PRODUCT, UPDATE_PRODUCT, UPDATEFORM_PRODUCTONE } from '../actions/product.action'

export const ProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LIST_PRODUCT:
      return {
        ...state,
        listProduct: payload

      }
    case ADD_PRODUCT:
      return {
        ...state,
        listProduct: [
          ...state.listProduct,
          payload
        ]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        listProduct: [...state.listProduct.filter((item) => item.id_Produccto !== payload)]
      }
    case UPDATEFORM_PRODUCT:
      return {
        ...state,
        form: payload
      }
    case UPDATEFORM_PRODUCTONE:
      return {
        ...state,
        form: {
          ...state.form,
          [Object.keys(payload)[0]]: payload[Object.keys(payload)[0]]
        }
      }
    case UPDATE_PRODUCT:
      const updatedProduct = state.listProduct.map(item => {
        if (item.id_Produccto === payload.id_Produccto) {
          item = payload
        }
        return item
      })
      return {
        ...state,
        listProduct: updatedProduct
      }
    default:
      return state
  }
}
