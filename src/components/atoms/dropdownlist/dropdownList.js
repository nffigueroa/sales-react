import React from 'react';
/**
 *  @Params
 *  item : type object
 *  label and value , label is displayed and value is returned when click over the item in the list.
 */

const DropDownList = (props) => {
    return (
        <div className="dropdown-list">
            {props.list.map((item) => {
                return <span onClick={() => props.returnValue(item.value)}>{item.label}</span>
            })}
        </div>
    )
}

export default DropDownList;