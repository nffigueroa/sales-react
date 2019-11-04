import React from 'react';
import DropDownList from '../../atoms/dropdownlist/dropdownList'
import InputNoBgComponent from '../../atoms/inputNoBg/inputNoBg'

const Dropdown = (props) => {
    const {list, config} = props;
    return(
        <div>
            <InputNoBgComponent placeholder={'Categoria'} id={'categoria_input'} type={'text'}></InputNoBgComponent>
            <DropDownList config={config} list={list} returnValue={(valueReturnedFromDD) => console.log(valueReturnedFromDD)}></DropDownList>
        </div>
    )
}

export default Dropdown;