import React, { useState } from "react";
import {
  ListProduct,
  DeleteProduct,
  UpdateForm,
  UpdateProduct,
  UpdateFormOne,
  AddProduct
} from "../../../state/actions/product.action";
import {
    deleteProduct,
    updateProduct,
    saveProduct
  } from "../../../services/pruduct";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import ModalTemplate from '../modal';
import AddProductForm from '../form/addProduct';
import ModalOptions from '../form/modalOptions';

const ModalsForProduct = (props) => {
  const { formNewConfig, idProducto, formUpdateConfig, showModalUpdate } = props
  const [modal, SetModal] = useState(false);
  const [modalDelete, SetModalDelete] = useState(false);
  const [modalUpdate, SetmodalUpdate] = useState(showModalUpdate);
  const handleDelete = response => {
    if (response) {
      deleteProduct(idProducto).then(response => {
        if (response.status === 200) {
          props.DeleteProduct(idProducto);
        }
      });
    }
    SetModalDelete(false);
  };
  return (
    <>
      {modal ? (
        <ModalTemplate close={val => SetModal(val)}>
          <AddProductForm
            formConfig={formNewConfig}
            endPoint={saveProduct}
            formSubmmitted={vallueFromProductForm => {
              SetModal(false);
              props.AddProduct({
                nombre_producto: vallueFromProductForm.product_name,
                categoria: props.category.filter(
                  item =>
                    item.id_categoria === vallueFromProductForm.product_category
                )[0].categoria,
                marca: props.mark.filter(
                  item => item.id_marca === vallueFromProductForm.product_mark
                )[0].marca,
                presentacion: props.presentation.filter(
                  item =>
                    item.id_presentacion ===
                    vallueFromProductForm.product_presentation
                )[0].presentacion,
                medicion: props.measurement.filter(
                  item =>
                    item.id_medicion ===
                    vallueFromProductForm.product_measurement
                )[0].medicion,
                id_Produccto: vallueFromProductForm.product_id_producto
              });
            }}
          />
        </ModalTemplate>
      ) : (
        ""
      )}

      {modalDelete ? (
        <ModalTemplate close={val => SetModalDelete(val)}>
          <ModalOptions
            optionSelected={handleDelete}
            title='Eliminar Registro'
            body='Se elimninará el registro permanentemente'
            options={[
              { label: "Si", value: 1 },
              { label: "No", value: 0 }
            ]}
          />
        </ModalTemplate>
      ) : (
        ""
      )}

      {showModalUpdate ? (
        <ModalTemplate close={val => SetmodalUpdate(val)}>
          <AddProductForm
            endPoint={updateProduct}
            formConfig={formUpdateConfig}
            isUpdate
            formSubmmitted={vallueFromProductForm => {
              SetmodalUpdate(false);
              props.UpdateProduct({
                nombre_producto: vallueFromProductForm.product_name,
                categoria: props.category.filter(
                  item =>
                    item.id_categoria === vallueFromProductForm.product_category
                )[0].categoria,
                marca: props.mark.filter(
                  item => item.id_marca === vallueFromProductForm.product_mark
                )[0].marca,
                presentacion: props.presentation.filter(
                  item =>
                    item.id_presentacion ===
                    vallueFromProductForm.product_presentation
                )[0].presentacion,
                medicion: props.measurement.filter(
                  item =>
                    item.id_medicion ===
                    vallueFromProductForm.product_measurement
                )[0].medicion,
                id_Produccto: vallueFromProductForm.product_id_producto
              });
            }}
          />
        </ModalTemplate>
      ) : (
        ""
      )}
    </>
  );
};
const mapStateToProps = state => ({
  user: state.user,
  userProperties: state.user.userLogged.body.userProperties,
  listProduct: state.product.listProduct,
  category: state.other.category,
  mark: state.other.mark,
  presentation: state.other.presentation,
  measurement: state.other.measurement
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      UpdateFormOne,
      UpdateProduct,
      AddProduct,
      ListProduct,
      DeleteProduct,
      UpdateForm,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ModalsForProduct);
