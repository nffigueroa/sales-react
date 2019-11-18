import React, {useEffect} from 'react';
import './addProduct.scss';
import { getCategories, getMarks, getPresentations, getMeasurements } from '../../../services/other';
import {AddMark, AddCategory, AddPresentation, AddMeasurement} from '../../../state/actions/other.action';
import {AddProduct} from '../../../state/actions/product.action';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Dropdown from '../../molecules/dropdown/dropdown';
import BtnGreenButtonAtom from '../../atoms/btn/btnGreen';
import { saveProduct } from '../../../services/pruduct';
import { dropDowns } from '../../../util/const';

const AddProductForm = (props)  => {
    let formRef = React.createRef();
    useEffect(() => {
        getCategories()
        .then(({data}) => props.AddCategory(data))
        getMarks()
        .then(({data}) => props.AddMark(data))
        getPresentations()
        .then(({data}) => props.AddPresentation(data))
        getMeasurements()
        .then(({data}) => props.AddMeasurement(data))
    }, []);
    return (
        <div className="add-product">
            <div className="add-product__title">
                <h4>AGREGAR PRODUCTO</h4>
            </div>
            <form className="add-product__form" onSubmit={(e) => {
                handleSubmit(e, props); 
                props.AddProduct({val: props.user.userLogged.userProperties[0].id_usuario, field: 'product_creation_user'});
                props.AddProduct({val: props.user.userLogged.userProperties[0].id_sucursal, field: 'product_id_sucursal'});
                }} ref={formRef}>
                
                <input className="input-form"  onChange={(e) => props.AddProduct({val: e.target.value.toUpperCase(), field: 'product_name'})} id="product_name" placeholder="Nombre del producto" />
                <fieldset className="dd">
                    {
                    props.categories ? <Dropdown returnValue={({val}) => {console.log(val);props.AddProduct({val: val[dropDowns.categories.returnValue], field: 'product_category'})}} id='product_category' placeholder='Categoria' 
                        config={dropDowns.categories} 
                    list={props.categories}></Dropdown> : 'Loading' }
                </fieldset>
                <fieldset className="dd">
                    {props.marks ? <Dropdown returnValue={({val}) => props.AddProduct({val: val[dropDowns.marks.returnValue], field: 'product_mark'})} id='product_mark' placeholder='Marca' 
                    config={dropDowns.marks} list={props.marks}></Dropdown> : 'Loading' }
                </fieldset>
                <fieldset className="dd">
                    {props.presentations ? <Dropdown returnValue={({val}) => props.AddProduct({val: val[dropDowns.presentations.returnValue], field: 'product_presentation'})} id='product_presentation' placeholder='Presentación' 
                    config={dropDowns.presentations} list={props.presentations}></Dropdown> : 'Loading' }
                </fieldset>
                <fieldset className="dd">
                    {props.measurements ? <Dropdown returnValue={({val}) => props.AddProduct({val: val[dropDowns.measurements.returnValue], field: 'product_measurement'})} id='product_measurement' placeholder='Medición' 
                    config={dropDowns.measurements} list={props.measurements}></Dropdown> : 'Loading' }
                </fieldset>

                
                <div className="button-container">
                    <BtnGreenButtonAtom type={'submit'} btnColor={'BLUE'} label="Guardar"/>
                </div>
            </form>
        </div>
    )
}
export const handleSubmit = (e, props) => {
    e.preventDefault();
    console.log(props.productForm);
    saveProduct(props.productForm);
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
const mapDispatchToProps = (dispatch) => bindActionCreators({AddMark, AddCategory, AddPresentation, AddProduct, AddMeasurement}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
