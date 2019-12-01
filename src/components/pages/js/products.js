import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getProductsList, deleteProduct } from '../../../services/pruduct';
import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {ListProduct, DeleteProduct} from '../../../state/actions/product.action';

import '../styles/product.scss';
import ModalTemplate from '../../templates/modal';
import AddProductForm from '../../templates/form/addProduct';
import { tableProductConfiguration } from '../../../util/const';
import OptionsOrganism from '../../organism/options';
import ModalOptions from '../../templates/form/modalOptions';



const ProductsPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
    const [modal, SetModal] = useState(false);
    const [modalDelete, SetModalDelete] = useState(false);
    const [modalUpdate, SetmodalUpdate] = useState(false);
    const [idProducto, SetidProducto] = useState(0);
    useEffect(() => {
       getProductsList(idSucursal)
       .then(({data}) => props.ListProduct(data))
    }, [])
    const modalDeleteFunc = (response) => {
        SetidProducto(response.id_Produccto)
        SetModalDelete(true);
    }
    const modalUpdatefunc = () => {
        SetmodalUpdate(true);
    }
    const handleDelete = (response) => {
        if (response) {
            deleteProduct(idProducto)
            props.DeleteProduct(idProducto);
        } 
        SetModalDelete(false);
    }
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
            {/*************************************** Modal Sections********************************************* */}
            {modal ? 
            <ModalTemplate close={(val) => SetModal(val)}>
                <AddProductForm formSubmmitted={() => SetModal(false)}></AddProductForm>
            </ModalTemplate> : ''}

            {
                modalDelete ?   <ModalTemplate>
                                    <ModalOptions optionSelected={handleDelete} title='Eliminar Registro'
                                                    body='Se elimninará el registro permanentemente'
                                                    options={[{label:'Si', value: 1}, {label: 'No', value: 0}]}  >
                                    </ModalOptions>
                                </ModalTemplate>
                : ''
            }

            {
                modalUpdate ? <ModalTemplate>asdasd</ModalTemplate>
                : ''
            }
            {/*************************************** Modal Sections********************************************* */}
            <div className="product-page__table">
                {
                    props.listProduct ? 
                    <TableOrganism data={props.listProduct} label={tableProductConfiguration} options={[
                        {
                            label: 'Eliminar', 
                            func: modalDeleteFunc
                        },
                        {
                            label: 'Modificar', 
                            func: modalUpdatefunc
                        }
                            ]}>
                    </TableOrganism> : 
                    'Loading'
                }
            </div>
        </div>
        
         </BaseTemplate>
}


const mapStateToProps = (state) => ({
    user: state.user,
    listProduct: state.product.listProduct,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({ListProduct, DeleteProduct}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);