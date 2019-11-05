import React, {useEffect} from 'react';
import './addProduct.scss';
import { getCategories, getMarks, getPresentations } from '../../../services/other';
import {AddMark, AddCategory, AddPresentation} from '../../../state/actions/other.action';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Dropdown from '../../molecules/dropdown/dropdown';

const AddProductForm = (props)  => {
    useEffect(() => {
        getCategories()
        .then(({data}) => props.AddCategory(data))
        getMarks()
        .then(({data}) => props.AddMark(data))
        getPresentations()
        .then(({data}) => props.AddPresentation(data))
    }, []);
    return (
        <div className="add-product">
            <div className="add-product__title">
                <h4>AGREGAR PRODUCTO</h4>
            </div>
            <form className="add-product__form">
                <input className="input-form" id="product_name" placeholder="Nombre del producto" />
                {props.categories ? <Dropdown id='categoria_input' placeholder='Categoria' config={{
                    returnValue: 'id_categoria',
                    displayName: 'categoria'
                }} list={props.categories}></Dropdown> : 'Loading' }

                 {props.marks ? <Dropdown id='marca' placeholder='Marca' config={{
                    returnValue: 'marca',
                    displayName: 'marca'
                }} list={props.marks}></Dropdown> : 'Loading' }

                {props.marks ? <Dropdown id='presentacion' placeholder='Presentación' config={{
                    returnValue: 'presentacion',
                    displayName: 'presentacion'
                }} list={props.presentations}></Dropdown> : 'Loading' }
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
    listProduct: state.product.listProduct,
    categories: state.other.category,
    marks: state.other.mark,
    presentations: state.other.presentation
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddMark, AddCategory, AddPresentation}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
