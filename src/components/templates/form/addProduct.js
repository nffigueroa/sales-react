import React, {useEffect} from 'react';
import './addProduct.scss';
import { getCategories } from '../../../services/other';
import {AddCategory} from '../../../state/actions/other.action';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Dropdown from '../../molecules/dropdown/dropdown';

const AddProductForm = (props)  => {
    useEffect(() => {
        getCategories()
        .then(({data}) => props.AddCategory(data))
    }, []);
    return (
        <div className="add-product">
            <div className="add-product__title">
                <h4>AGREGAR PRODUCTO</h4>
            </div>
            <form className="add-product__form">
                <input id="product_name" placeholder="Nombre del producto" />
                {props.categories ? <Dropdown config={{
                    returnValue: 'id_categoria',
                    displayName: 'categoria'
                }} list={props.categories}></Dropdown> : 'Loading' }
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    user: state.user,
    listProduct: state.product.listProduct,
    categories: state.other.category
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddCategory}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);
