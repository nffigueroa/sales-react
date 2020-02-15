import React from 'react'
import '../styles/login.scss'
import LoginOrganism from '../../organism/login'

const LoginPage = (props) => {
  return <>
    <div className='login'>
      <header className='login__title'>
        <h1>SOFIA</h1>
      </header>
      <section className='login__container'>
        <LoginOrganism history={props.history} />
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
