import React from 'react'

const ContainerTemplate = (props) => {
  return <>
    <div className='container-template'>
      {props.children}
    </div>
         </>
}

export default ContainerTemplate
