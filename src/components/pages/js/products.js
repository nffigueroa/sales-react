import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getProductsList } from '../../../services/pruduct';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import {AddProduct} from '../../../state/actions/product.action';

import '../styles/product.scss';

const ProductsPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
    const labels = [
        {label: 'Codigo', bd_name: 'id_Produccto'},
        {label: 'Producto', bd_name: 'nombre_producto'},
        {label: 'Categoria', bd_name: 'categoria'},
        {label: 'Medicion', bd_name: 'medicion'},
        {label: 'Presentacion', bd_name: 'presentacion'},
        {label: 'Marca', bd_name: 'marca'},
    ]
    useEffect(() => {
       getProductsList(idSucursal)
       .then(({data}) => props.AddProduct(data))
    }, [])

    return <BaseTemplate history={props.history}>
        <div className="product-page">
            <div className="product-page__title">
            <h4 className="product-page__title--normal">
                PRODUCT
            </h4>
            <p>Lista de productos segúng tu surcusal</p>
            </div>
            <div className="product-page__table">
                {props.listProduct ? <TableOrganism data={props.listProduct} label={labels}></TableOrganism> : 'Loading'}
            </div>
        </div>
        
         </BaseTemplate>
}
const mapStateToProps = (state) => ({
    user: state.user,
    listProduct: state.product.listProduct
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddProduct}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);