import React, {useState} from 'react';
import DropDownList from '../../atoms/dropdownlist/dropdownList'
import './dropdown.scss';
const Dropdown = (props) => {
    /**
        @return {
            value: ,
            key: 
        }
        It has the input control and call an external component for the list which is <DropDownList>
    */
    const {list, config, placeholder, id} = props;
    const [showList, setList] = useState(false);
    const [inputValue, setinputValue] = useState(props.defaultValue);
    console.log(config);
    return(
        <div className="dropdown-molecule">
            <input className='input-dropdown' value={inputValue} onClick={() => setList(!showList)} placeholder={placeholder} id={id} type='text' />
            {showList ? 

            <DropDownList {...config} list={list} 
            returnValue={(valueReturnedFromDD) => returnValueDropDownList(props, setinputValue, setList, valueReturnedFromDD, config, id)}></DropDownList>
            : ''}
            
        </div>
    )
}

/**
 * 
 * @param {*} props 
 * @param {*} setinputValue Function state 
 * @param {*} setList Function state 
 * @param {*} valueReturnedFromDD Value returned from <DropdownList>
 * @param {*} config Array
 * @param {*} id Sent from parent indicating the control id <html>
 */
const returnValueDropDownList = (props, setinputValue, setList, valueReturnedFromDD, config, id) => {
    props.returnValue({value: valueReturnedFromDD, key: id});
    setinputValue(valueReturnedFromDD[config.displayName]);
    setList(false);
    return valueReturnedFromDD;
}

export default Dropdown;