import React from 'react'
import './addProduct.scss'
import { AddMark, AddCategory, AddPresentation, AddMeasurement } from '../../../state/actions/other.action'
import { UpdateForm, AddProduct } from '../../../state/actions/product.action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Dropdown from '../../molecules/dropdown/dropdown'
import BtnGreenButtonAtom from '../../atoms/btn/btnGreen'

const AddProductForm = (props) => {
  const formRef = React.createRef()
  const { isUpdate } = props
  const inputTypes = {
    INPUT: 'input',
    DROPDOWN: 'dropdown'
  }
  const { formConfig } = props
  return (
    <div className='add-product'>
      <div className='add-product__title'>
        <h4>AGREGAR PRODUCTO</h4>
      </div>
      <form
        className='add-product__form' onSubmit={(e) => {
          handleSubmit(e, props)
          formConfig.funcReturnValue({ val: props.user.userLogged.body.userProperties.id_usuario, field: 'product_creation_user' })
          formConfig.funcReturnValue({ val: props.user.userLogged.body.userProperties.id_sucursal, field: 'product_id_sucursal' })
        }} ref={formRef}
      >
        {
          formConfig.values.map((item, index) => {
            switch (item.typeInput) {
              case inputTypes.INPUT:
                return (<>
                  <input
                    className='input-form'
                    defaultValue={isUpdate ? item.value : ''}
                    onChange={(e) => {
                      formConfig.funcReturnValue(
                        {
                          [item.fieldName]: e.target.value.toUpperCase()
                        })
                    }}
                    id={item.id}
                    placeholder={item.placeholder}
                  />
                </>)
              case inputTypes.DROPDOWN:
                return (<>
                  <fieldset className='dd'>
                    {<Dropdown
                      defaultValue={isUpdate ? item.value : ''}
                      returnValue={({ key, value }) => {
                        item.key = key
                        formConfig.funcReturnValue({ [item.fieldName]: value[item.dropdownConfig.returnValue] })
                      }}
                      id={item.id}
                      placeholder={item.placeholder}
                      config={item.dropdownConfig}
                      list={item.dropdownList}
                    />}
                  </fieldset>
                </>)
              default:
                break
            }
          })
        }
        <div className='button-container'>
          <BtnGreenButtonAtom type='submit' btnColor='BLUE' label='Guardar' />
        </div>
      </form>
    </div>
  )
}
export const handleSubmit = (e, props) => {
  e.preventDefault()
  props.endPoint(props.productForm)
  props.formSubmmitted(props.productForm)
}

const mapStateToProps = (state) => ({
  user: state.user,
  listProduct: state.product.listProduct,
  productForm: state.product.form,
  categories: state.other.category,
  marks: state.other.mark,
  presentations: state.other.presentation,
  measurements: state.other.measurement
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ AddMark, AddCategory, AddPresentation, AddProduct, AddMeasurement, UpdateForm }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
