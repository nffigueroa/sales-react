import React, {useState} from 'react';
import DropDownList from '../../atoms/dropdownlist/dropdownList'
import './dropdown.scss';
const Dropdown = (props) => {
    const {list, config, placeholder, id} = props;
    const [showList, setList] = useState(false);
    const [inputValue, setinputValue] = useState('');
    return(
        <div className="dropdown-molecule">
            <input className='input-dropdown' defaultValue={inputValue} onClick={() => setList(!showList)} placeholder={placeholder} id={id} type='text' />
            {showList ? 
            <DropDownList config={config} list={list} returnValue={(valueReturnedFromDD) => {
                props.returnValue({val: valueReturnedFromDD, field: id});
                setinputValue(valueReturnedFromDD[config.displayName]);
                setList(false);
                return valueReturnedFromDD;
            }}></DropDownList>
            : ''}
            
        </div>
    )
}

export default Dropdown;