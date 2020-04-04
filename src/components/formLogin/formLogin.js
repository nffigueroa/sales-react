import React from 'react'; 
import './formLogin.scss';


const FormLogin = () =>{

    return <>
        <form className="form-login" >
            <label >Usuario</label>
            <input type="text" ></input>
            <label>Contraseña</label>
            <input type="password"></input> 
            <a>Olvidé mi conttraseña</a>         
            <div className="container-button-login" >
                <button >Iniciar Sessión</button>
                <button >Crear Usuario</button>
            </div>
        </form>
    
    </>

}

export default FormLogin