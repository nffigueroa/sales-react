import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getProductsList } from '../../../services/pruduct';
import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {ListProduct} from '../../../state/actions/product.action';

import '../styles/product.scss';
import ModalTemplate from '../../templates/modal';
import AddProductForm from '../../templates/form/addProduct';
import { tableProductConfiguration } from '../../../util/const';

const ProductsPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
    const [modal, SetModal] = useState(false);
    useEffect(() => {
       getProductsList(idSucursal)
       .then(({data}) => props.ListProduct(data))
    }, [])

    return <BaseTemplate history={props.history}>
        <div className="product-page">
            <div className="product-page__title">
                <h4 className="product-page__title--normal">
                    PRODUCT
                </h4>
                <p>Lista de productos segúng tu surcusal</p>
            </div>
            <div className="product-page__add" alt="Agregar un nuevo producto" onClick={() => SetModal(!modal)}>
                <i className="fas fa-plus"></i>
            </div>
            {modal ? 
            <ModalTemplate close={(val) => SetModal(val)}>
                <AddProductForm></AddProductForm>
            </ModalTemplate> : ''}
            <div className="product-page__table">
                {props.listProduct ? <TableOrganism data={props.listProduct} label={tableProductConfiguration}></TableOrganism> : 'Loading'}
            </div>
        </div>
        
         </BaseTemplate>
}
const mapStateToProps = (state) => ({
    user: state.user,
    listProduct: state.product.listProduct,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ListProduct}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);