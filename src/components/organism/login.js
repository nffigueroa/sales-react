import React, { Component } from 'react';
import UserAndPassWordMolecule from '../molecules/userAndPassword/userAndPaassword';

export default class LoginOrganism extends React.Component {
    render () {
        return  <>
            <div className="login">
                <div className="login__container">
                    <UserAndPassWordMolecule />
                </div>
            </div>
        </>
    }
}