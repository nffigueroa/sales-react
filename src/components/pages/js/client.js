import React, { useState, useEffect } from 'react'
import BaseTemplate from '../../templates/base'
import TableOrganism from '../../organism/table'
import { getClientByIdSucursal, createNewClient } from '../../../services/client'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { AddClient } from '../../../state/actions/client.action'
import AddProductForm from '../../templates/form/addProduct'

import '../styles/product.scss'
import { tableClientConfiguration, formClient } from '../../../util/const'
import ModalTemplate from '../../templates/modal'
import { getCities } from '../../../services/other'
import { AddCities } from '../../../state/actions/other.action'

const ClientPage = (props) => {
  const [modal, SetModal] = useState(false)
  const [formNewConfig, SetformNewConfig] = useState()
  const idSucursal = props.user.userLogged.body.userProperties.id_sucursal
  useEffect(() => {
    getClientByIdSucursal(idSucursal)
      .then(({ data }) => props.AddClient(data.body))
    getCities()
      .then(({ data }) => props.AddCities(data.body))
  }, [])
  return <BaseTemplate history={props.history}>
    <div className='product-page'>
      <div className='product-page__title'>
        <h4 className='product-page__title--normal'>
                    CLIENT
        </h4>
        <p>Lista de clientes segun tu sucursal</p>
      </div>
      <div
        className='product-page__add' alt='Agregar un nuevo producto' onClick={() => {
          SetModal(!modal)
          SetformNewConfig(formClient('',
            '',
            '',
            '',
            '',
            '',
            props.cities))
        }}
      >
        <i className='fas fa-plus' />
      </div>

      <div className='product-page__table'>
        {props.listClient ? <TableOrganism data={props.listClient} label={tableClientConfiguration} /> : 'Loading'}
      </div>
    </div>

    {modal
      ? <ModalTemplate close={(val) => SetModal(val)}>
        <AddProductForm
          formConfig={formNewConfig} endPoint={createNewClient} formSubmmitted={(vallueFromProductForm) => {
            SetModal(false)
          }}
        />
        </ModalTemplate> : ''}

         </BaseTemplate>
}
const mapStateToProps = (state) => ({
  user: state.user,
  listClient: state.client.listClient,
  cities: state.other.cities
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ AddClient, AddCities }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ClientPage)
