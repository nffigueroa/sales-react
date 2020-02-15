import React from 'react'
import './dropdownList.scss'
/**
 *  @Params
 *  item : type object
 *  label and value , label is displayed and value is returned when click over the item in the list.
 */

const DropDownList = (props) => {
  const { displayName } = props
  console.log(props)
  return (
    <div className='dropdown-list'>
      {props.list.map((item, index) => {
        return <span key={index} className='item-dropdown' onClick={() => props.returnValue(item)}>{item[displayName]}</span>
      })}
    </div>
  )
}

export default DropDownList
