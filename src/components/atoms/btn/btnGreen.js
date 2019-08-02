import React from 'react';
import './style.css';

const BtnGreenButtonAtom = (props) => {
    const {type, label , id} = props;
    return ( 
        <button type={type} id={id}>
            <span>{label}</span>
        </button>
     );
}
 
export default BtnGreenButtonAtom;