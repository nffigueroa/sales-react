import InputNoBgComponent from "../../atoms/inputNoBg/inputNoBg";
import React from 'react';
import './style.scss';
import BtnGreenButtonAtom from "../../atoms/btn/btnGreen";
import {connect} from 'react-redux';
import {AddUser, LoginUser} from '../../../state/actions/user.action';
import { bindActionCreators } from "redux";
import { loginProcess } from '../../../services/user';


class UserAndPassWordMolecule extends React.Component {
    constructor (props) {
        super(props); 
    }
    render() {
        return ( 
            <div className="login-molecule">
                <InputNoBgComponent id="userName" placeholder="Usuario" getResultFromInput={this.getResults} />
                <InputNoBgComponent id="password" placeholder="Contraseña" getResultFromInput={this.getResults}/>
                <BtnGreenButtonAtom btnColor={'GREEN'} listenClick={this.login} label="Ingresar"/>
            </div>
         );
    }

    getResults = (val) => {
        this.props.LoginUser({
            userName : val.id === 'userName' ? val.value : this.props.user.userName,
            password: val.id === 'password' ? val.value : this.props.user.password 
        })
    }

    login = () => {
        const {userName, password} = this.props.user;
        loginProcess(userName, password)
        .then((response) => {
            this.props.AddUser(response.data);
            this.props.history.push('/home');
        })
        .catch((e) => {console.log(e)})
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({AddUser, LoginUser}, dispatch)

 
export default connect(mapStateToProps, mapDispatchToProps)(UserAndPassWordMolecule);