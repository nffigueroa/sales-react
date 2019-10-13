import React from 'react';
import './style.css';

const BtnGreenButtonAtom = (props) => {
    const {type, label , id, listenClick} = props;
    return ( 
        <button onClick={listenClick} type={type} id={id}>
            <span>{label}</span>
        </button>
     );
}
 
export default BtnGreenButtonAtom;