import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getClientByIdSucursal } from '../../../services/client';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import {AddClient} from '../../../state/actions/client.action';

import '../styles/product.scss';
import { tableClientConfiguration } from '../../../util/const';

const ClientPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
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
                {props.listClient ? <TableOrganism data={props.listClient} label={tableClientConfiguration}></TableOrganism> : 'Loading'}
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