import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getClientByIdSucursal } from '../../../services/client';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import {AddClient} from '../../../state/actions/client.action';

import '../styles/product.scss';

const ClientPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
    const labels = [
        {label: 'Codigo', bd_name: 'id_cliente'},
        {label: 'Nombre', bd_name: 'nombre_cliente'},
        {label: 'Apellido', bd_name: 'apellido_cliente'},
        {label: 'Cedula', bd_name: 'cedula_cliente'},
        {label: 'Telefono', bd_name: 'telefono_cliente'},
        {label: 'Direccion', bd_name: 'direccion_cliente'},
        {label: 'Email', bd_name: 'mail_cliente'},
        {label: 'Ciudad', bd_name: 'ciudad'},
        {label: 'Juridico', bd_name: 'EsJuridico'},
        {label: 'Ciudad', bd_name: 'ciudad'},
        {label: 'id_ciudad', bd_name: 'id_ciudad'},
    ]
    useEffect(() => {
        getClientByIdSucursal(idSucursal)
       .then(({data}) => props.AddClient(data))
    }, [])

    return <BaseTemplate history={props.history}>
        <div className="product-page">
            <div className="product-page__title">
            <h4 className="product-page__title--normal">
                CLIENT
            </h4>
            <p>Lista de clientes segun tu sucursal</p>
            </div>
            <div className="product-page__table">
                {props.listClient ? <TableOrganism data={props.listClient} label={labels}></TableOrganism> : 'Loading'}
            </div>
        </div>
        
         </BaseTemplate>
}
const mapStateToProps = (state) => ({
    user: state.user,
    listClient: state.client.listClient
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddClient}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage);