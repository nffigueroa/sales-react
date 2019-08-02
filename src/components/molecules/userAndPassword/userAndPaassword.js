import InputNoBgComponent from "../../atoms/inputNoBg/inputNoBg";
import React from 'react';
import './style.scss';
import BtnGreenButtonAtom from "../../atoms/btn/btnGreen";

const UserAndPassWordMolecule = () => {
    return ( 
        <div className="login-molecule">
            <InputNoBgComponent placeholder="Usuario" />
            <InputNoBgComponent placeholder="Contraseña" />
            <BtnGreenButtonAtom label="Ingresar"/>
        </div>
     );
}
 
export default UserAndPassWordMolecule;