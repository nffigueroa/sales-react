import React, { useEffect, useState } from "react";
import BaseTemplate from "../../templates/base";
import TableOrganism from "../../organism/table";
import {
  getProductsList,
  deleteProduct,
  updateProduct,
  saveProduct,
} from "../../../services/pruduct";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import {
  ListProduct,
  DeleteProduct,
  UpdateForm,
  UpdateProduct,
  UpdateFormOne,
  AddProduct,
} from "../../../state/actions/product.action";
import {
  AddMark,
  AddCategory,
  AddPresentation,
  AddMeasurement,
} from "../../../state/actions/other.action";

import "../styles/product.scss";
import { tableProductConfiguration, formConfig } from "../../../util/const";
import {
  getCategories,
  getMarks,
  getPresentations,
  getMeasurements,
} from "../../../services/other";

import ModalsForProduct from "../../templates/modals/ModalsForProduct";

const useCallOtherServices = (idSucursal) => {
  const [listProduct, setListProduct] = useState();
  const [category, setCategory] = useState();
  const [marks, setMarks] = useState();
  const [presentation, setPresentation] = useState();
  const [measurement, setMeasurement] = useState();
  useEffect(() => {
    getProductsList(idSucursal).then(({ data: { body } }) =>
      setListProduct(body)
    );
    getCategories()
      .then(({ data }) => setCategory(data.body))
      .then(() => getMarks().then(({ data }) => setMarks(data.body)))
      .then(() =>
        getPresentations().then(({ data }) => setPresentation(data.body))
      )
      .then(() =>
        getMeasurements().then(({ data }) => setMeasurement(data.body))
      );
  }, []);
  return [listProduct, category, marks, presentation, measurement];
};

const ProductsPage = (props) => {
  const { id_sucursal: idSucursal } = props.user.userLogged.userProperties;
  const [modal, SetModal] = useState(false);
  const [modalDelete, SetModalDelete] = useState(false);
  const [showModalUpdate, SetShowModalUpdate] = useState(false);
  const [idProducto, SetidProducto] = useState(0);
  const [formUpdateConfig, SetformUpdateConfig] = useState();
  const [formNewConfig, SetformNewConfig] = useState();

  const [
    listProduct,
    category,
    marks,
    presentation,
    measurement,
  ] = useCallOtherServices(idSucursal);
  props.ListProduct(listProduct);
  props.AddCategory(category);
  props.AddMark(marks);
  props.AddPresentation(presentation);
  props.AddMeasurement(measurement);

  const modalDeleteFunc = (response) => {
    SetidProducto(response.id_Produccto);
    SetModalDelete(true);
  };
  const modalUpdatefunc = (response) => {
    props.UpdateForm({
      product_name: response.nombre_producto,
      product_category: props.category.filter(
        (item) => item.categoria === response.categoria
      )[0].id_categoria,
      product_mark: props.mark.filter(
        (item) => item.marca === response.marca
      )[0].id_marca,
      product_presentation: props.presentation.filter(
        (item) => item.presentacion === response.presentacion
      )[0].id_presentacion,
      product_measurement: props.measurement.filter(
        (item) => item.medicion === response.medicion
      )[0].id_medicion,
      product_creation_user: props.userProperties.id_usuario,
      product_id_sucursal: props.userProperties.id_sucursal,
      product_id_producto: response.id_Produccto,
    });
    SetformUpdateConfig(
      formConfig(
        response.nombre_producto,
        response.marca,
        response.categoria,
        response.presentacion,
        response.medicion,
        props.UpdateFormOne,
        response.id_Produccto,
        props.mark,
        props.category,
        props.measurement,
        props.presentation
      )
    );
    SetShowModalUpdate(true);
  };

  return (
    <BaseTemplate history={props.history}>
      <div className='product-page'>
        <div className='product-page__title'>
          <h4 className='product-page__title--normal'>PRODUCT</h4>
          <p>Lista de productos segúng tu surcusal</p>
        </div>
        <div
          className='product-page__add'
          alt='Agregar un nuevo producto'
          onClick={() => {
            SetModal(!modal);
            SetformNewConfig(
              formConfig(
                "",
                "",
                "",
                "",
                "",
                props.UpdateFormOne,
                "",
                props.mark,
                props.category,
                props.measurement,
                props.presentation
              )
            );
          }}
        ></div>
        {/** ************************************* Modal Sections********************************************* */}
        <ModalsForProduct
          {...idProducto}
          {...formUpdateConfig}
          {...formNewConfig}
          {...showModalUpdate}
        />
        {showModalUpdate}
        {/** ************************************* Modal Sections********************************************* */}
        <div className='product-page__table'>
          {props.listProduct ? (
            <TableOrganism
              data={props.listProduct}
              label={tableProductConfiguration}
              options={[
                {
                  label: "Eliminar",
                  func: modalDeleteFunc,
                },
                {
                  label: "Modificar",
                  func: modalUpdatefunc,
                },
              ]}
            />
          ) : (
            "Loading"
          )}
        </div>
      </div>
    </BaseTemplate>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  userProperties: state.user.userLogged.userProperties,
  listProduct: state.product.listProduct,
  category: state.other.category,
  mark: state.other.mark,
  presentation: state.other.presentation,
  measurement: state.other.measurement,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      UpdateFormOne,
      UpdateProduct,
      AddProduct,
      ListProduct,
      DeleteProduct,
      UpdateForm,
      AddMark,
      AddCategory,
      AddPresentation,
      AddMeasurement,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
