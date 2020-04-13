import React from "react";
import "./formLogin.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddUser, LoginUser } from "../../state/actions/user.action";
import { loginProcess } from "../../services/user";

const FormLogin = (props) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          doLogin(props.AddUser, props.user, props.history);
        }}
        className='form-login'
      >
        <label>Usuario</label>
        <input
          type='text'
          id='userName'
          onChange={(e) =>
            props.LoginUser({ id: e.target.id, value: e.target.value })
          }
        ></input>
        <label>Contraseña</label>
        <input
          type='password'
          id='password'
          onChange={(e) =>
            props.LoginUser({ id: e.target.id, value: e.target.value })
          }
        ></input>
        <a>Olvidé mi conttraseña</a>
        <div className='container-button-login'>
          <div className='container-button-login__two'>
            <button>Iniciar Sessión</button>
          </div>
          <div className='container-button-login__two'>
            <button>Crear Usuario</button>
          </div>
        </div>
      </form>
    </>
  );
};

const doLogin = (AddUser, { userName, password }, history) => {
  loginProcess(userName, password).then((response) => {
    AddUser(response.data.body);
    history.push("/home");
  });
};

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddUser, LoginUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
