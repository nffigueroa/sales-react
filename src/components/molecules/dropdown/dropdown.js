import React, {useState} from 'react';
import DropDownList from '../../atoms/dropdownlist/dropdownList'
import InputNoBgComponent from '../../atoms/inputNoBg/inputNoBg'
import './dropdown.scss';
const Dropdown = (props) => {
    const {list, config, placeholder, id} = props;
    const [showList, setList] = useState(false);
    const [inputValue, setinputValue] = useState();
    return(
        <div className="dropdown-molecule">
            <input value={inputValue} className='input-dropdown' onClick={() => setList(!showList)} placeholder={placeholder} id={id} type='text'/>
            {showList ? 
            <DropDownList config={config} list={list} returnValue={(valueReturnedFromDD) => setinputValue(valueReturnedFromDD)}></DropDownList>
            : ''}
            
        </div>
    )
}

export default Dropdown;