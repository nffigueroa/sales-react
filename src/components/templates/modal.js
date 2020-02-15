import React from 'react'
import './modal.scss'

const ModalTemplate = (props) => {
  return (
    <div className='modal-component'>

      <section className='container'>
        <div className='container__close' onClick={() => props.close(false)}><i className='far fa-times-circle' /></div>
        {props.children}
      </section>
      <div className='modal' style={{ height: '100vh' }} />
    </div>
  )
}

export default ModalTemplate
