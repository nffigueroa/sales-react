/**
 * Normal attributes in html for the input 
 * @param {*} props 
 * placeholder
 * id
 * type
 * getResultFromInput() : Function which returns the value typed
 */
import './inputNoBg.scss';
import React from 'react';

const InputNoBgComponent = (props) => {
    return ( <input type={props.type} id={props.id} placeholder={props.placeholder} onChange={(e) => props.getResultFromInput(e)} />);
}
 
export default InputNoBgComponent;