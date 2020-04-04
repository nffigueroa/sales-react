import React from 'react'
import '../styles/login.scss'
import LoginOrganism from '../../organism/login'
import FormLogin from '../../formLogin/formLogin'


const LoginPage = (props) => {
  return <>
  
    <div className='login'>
         <section className='login__container'>
            <h1 className="login__title" >SOFIA</h1>
            <FormLogin></FormLogin>
        </section>
      <footer className='login__footer'>
        <span>
         @Fabian Figueroa Sistema de optimización, financiero , inventario y administración.
        </span>
      </footer>
    </div>
</>
}
export default LoginPage
