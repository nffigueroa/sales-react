import React from 'react'
import './style.scss'

const BtnGreenButtonAtom = (props) => {
  const { type, label, id, listenClick } = props
  switch (props.btnColor) {
    case 'GREEN':
      return (<button style={{ backgroundColor: '#39D087' }} onClick={listenClick} type={type} id={id}>
        <span id='label_btn_green'>{label}</span>
              </button>)
    case 'BLUE':
      return (<button style={{ backgroundColor: '#007bff' }} onClick={listenClick} type={type} id={id}>
        <span id='label_btn_primary'>{label}</span>
              </button>)
    default:
      return null
  }
}

export default BtnGreenButtonAtom
