import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getProductsList, deleteProduct, updateProduct, saveProduct } from '../../../services/pruduct';
import {connect} from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import {ListProduct, DeleteProduct, UpdateForm, UpdateProduct, UpdateFormOne} from '../../../state/actions/product.action';
import {AddMark, AddCategory, AddPresentation, AddMeasurement} from '../../../state/actions/other.action';
import { AddProduct } from '../../../state/actions/product.action';
import '../styles/product.scss';
import ModalTemplate from '../../templates/modal';
import AddProductForm from '../../templates/form/addProduct';
import { tableProductConfiguration, formConfig } from '../../../util/const';
import ModalOptions from '../../templates/form/modalOptions';
import { getCategories, getMarks, getPresentations, getMeasurements } from '../../../services/other';



const ProductsPage = (props) => {
    const idSucursal = props.user.userLogged.body.userProperties.id_sucursal;
    const [modal, SetModal] = useState(false);
    const [modalDelete, SetModalDelete] = useState(false);
    const [modalUpdate, SetmodalUpdate] = useState(false);
    const [idProducto, SetidProducto] = useState(0);
    const [formUpdateConfig, SetformUpdateConfig] = useState();
    const [formNewConfig, SetformNewConfig] = useState();
    useEffect(() => {
       getProductsList(idSucursal)
       .then(({data: {body}}) => props.ListProduct(body))
       getCategories()
        .then(({data}) => props.AddCategory(data.body))
        .then(() =>  getMarks().then(({data}) => props.AddMark(data.body)) )
        .then(() =>  getPresentations().then(({data}) => props.AddPresentation(data.body)))
        .then(() => getMeasurements().then(({data}) => props.AddMeasurement(data.body)))
    }, [])
    const modalDeleteFunc = (response) => {
        SetidProducto(response.id_Produccto)
        SetModalDelete(true);
    }
    const modalUpdatefunc = (response) => {
            props.UpdateForm({
            product_name: response.nombre_producto,
            product_category: props.category.filter((item) => item.categoria === response.categoria)[0].id_categoria,
            product_mark: props.mark.filter((item) => item.marca === response.marca)[0].id_marca,
            product_presentation: props.presentation.filter((item) => item.presentacion === response.presentacion)[0].id_presentacion,
            product_measurement: props.measurement.filter((item) => item.medicion === response.medicion)[0].id_medicion,
            product_creation_user: props.userProperties.id_usuario,
            product_id_sucursal: props.userProperties.id_sucursal,
            product_id_producto: response.id_Produccto
        })
        SetformUpdateConfig(formConfig(response.nombre_producto, 
                    response.marca,
                    response.categoria,
                    response.presentacion,
                    response.medicion,
                    props.UpdateFormOne,
                    response.id_Produccto,
                    props.mark,
                    props.category,
                    props.measurement,
                    props.presentation));
        SetmodalUpdate(true)
    }
    const handleDelete = (response) => {
        if (response) {
            deleteProduct(idProducto)
            .then((response) => {
                if (response.status === 200) {
                    props.DeleteProduct(idProducto);
                }
            })
            
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
            <div className="product-page__add" alt="Agregar un nuevo producto" onClick={() => {
                SetModal(!modal);
                SetformNewConfig(formConfig('', 
                    '',
                    '',
                    '',
                    '',
                    props.UpdateFormOne,
                    '',
                    props.mark,
                    props.category,
                    props.measurement,
                    props.presentation));
                }}>
                <i className="fas fa-plus"></i>
            </div>
            {/*************************************** Modal Sections********************************************* */}
            {modal ? 
            <ModalTemplate close={(val) => SetModal(val)}>
                <AddProductForm  formConfig={formNewConfig} endPoint={saveProduct}  formSubmmitted={(vallueFromProductForm) => {
                    SetModal(false);
                    props.AddProduct({ 
                        nombre_producto: vallueFromProductForm.product_name,
                        categoria: props.category.filter((item) => item.id_categoria === vallueFromProductForm.product_category)[0].categoria,
                        marca: props.mark.filter((item) => item.id_marca === vallueFromProductForm.product_mark)[0].marca,
                        presentacion: props.presentation.filter((item) => item.id_presentacion === vallueFromProductForm.product_presentation)[0].presentacion,
                        medicion: props.measurement.filter((item) => item.id_medicion === vallueFromProductForm.product_measurement)[0].medicion,
                        id_Produccto: vallueFromProductForm.product_id_producto})
                    }}></AddProductForm>
            </ModalTemplate> : ''}

            {
                modalDelete ?   <ModalTemplate close={(val) => SetModalDelete(val)}>
                                    <ModalOptions optionSelected={handleDelete} title='Eliminar Registro'
                                                    body='Se elimninará el registro permanentemente'
                                                    options={[{label:'Si', value: 1}, {label: 'No', value: 0}]}  >
                                    </ModalOptions>
                                </ModalTemplate>
                : ''
            }

            {
                modalUpdate ? <ModalTemplate close={(val) => SetmodalUpdate(val)}>
                    <AddProductForm endPoint={updateProduct} formConfig={formUpdateConfig} isUpdate={true} formSubmmitted={(vallueFromProductForm) =>  {
                        SetmodalUpdate(false);
                        props.UpdateProduct({ 
                            nombre_producto: vallueFromProductForm.product_name,
                            categoria: props.category.filter((item) => item.id_categoria === vallueFromProductForm.product_category)[0].categoria,
                            marca: props.mark.filter((item) => item.id_marca === vallueFromProductForm.product_mark)[0].marca,
                            presentacion: props.presentation.filter((item) => item.id_presentacion === vallueFromProductForm.product_presentation)[0].presentacion,
                            medicion: props.measurement.filter((item) => item.id_medicion === vallueFromProductForm.product_measurement)[0].medicion,
                            id_Produccto: vallueFromProductForm.product_id_producto})
                        }}></AddProductForm>
                </ModalTemplate>
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
    userProperties: state.user.userLogged.body.userProperties,
    listProduct: state.product.listProduct,
    category: state.other.category,
    mark: state.other.mark,
    presentation: state.other.presentation,
    measurement: state.other.measurement
})
const mapDispatchToProps = (dispatch) => bindActionCreators({UpdateFormOne, UpdateProduct, AddProduct, ListProduct, DeleteProduct, UpdateForm, AddMark, AddCategory, AddPresentation, AddMeasurement}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);