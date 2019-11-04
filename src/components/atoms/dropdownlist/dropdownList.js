import React from 'react';
import './dropdownList.scss';
/**
 *  @Params
 *  item : type object
 *  label and value , label is displayed and value is returned when click over the item in the list.
 */

const DropDownList = (props) => {
    const {config} = props;
    return (
        <div className="dropdown-list">
            {props.list.map((item) => {
                return <span className="item-dropdown" onClick={() => props.returnValue(item[config.returnValue])}>{item[config.displayName]}</span>
            })}
        </div>
    )
}

export default DropDownList;