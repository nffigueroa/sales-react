import InputNoBgComponent from "../../atoms/inputNoBg/inputNoBg";
import React from 'react';
import './style.scss';
import BtnGreenButtonAtom from "../../atoms/btn/btnGreen";
import {connect} from 'react-redux';
import {AddUser} from '../../../state/actions/user.action';
import { bindActionCreators } from "redux";


class UserAndPassWordMolecule extends React.Component {
    constructor (props) {
        super(props); 
    }
    render() {
        return ( 
            <div className="login-molecule">
                <InputNoBgComponent id="usuario" placeholder="Usuario" getResultFromInput={this.getResults} />
                <InputNoBgComponent id="contraseña" placeholder="Contraseña" getResultFromInput={this.getResults}/>
                <BtnGreenButtonAtom label="Ingresar"/>
            </div>
         );
    }

    getResults(val){
        this.props.AddUser({
            [val.id] : val.value
        })
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({AddUser}, dispatch)

 
export default connect(mapStateToProps, mapDispatchToProps)(UserAndPassWordMolecule);