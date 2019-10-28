import React from 'react';
import BaseTemplate from '../../templates/base';
import TableOrganism from '../../organism/table';
import { getProductsList } from '../../../services/pruduct';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import {AddProduct} from '../../../state/actions/product.action';

const ProductsPage = (props) => {
    const idSucursal = props.user.userLogged.userProperties[0].id_sucursal;
    getProductsList(idSucursal).then((res) => {console.log(res)})
    useEffect(() => {
       getProductsList(idSucursal)
       .then((response) => console.log(response))
    }, [])
    return <BaseTemplate history={props.history}>
            <TableOrganism></TableOrganism>
         </BaseTemplate>
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => bindActionCreators({AddProduct}, dispatch)
export default connect(mapStateToProps)(ProductsPage);