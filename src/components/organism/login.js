import React, { Component } from 'react';
import UserAndPassWordMolecule from '../molecules/userAndPassword/userAndPaassword';

const LoginOrganism = (props) => {
    return  <>
    <UserAndPassWordMolecule history={props.history} />
</> 
}

export default LoginOrganism;
