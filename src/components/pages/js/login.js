import React from "react";
import "../styles/login.scss";
import LoginOrganism from "../../organism/login";
import FormLogin from "../../formLogin/formLogin";
import AdvertisingLogin from "../../AdvertisingLogin/AdvertisingLogin";

const LoginPage = (props) => {
  return (
    <>
      <div className='login'>
        <div className='login__container-Advert'>
          <AdvertisingLogin> </AdvertisingLogin>
        </div>
        <section className='login__container'>
          <h1 className='login__title'> SOFIA </h1>
          <FormLogin {...props}> </FormLogin>
        </section>
        <footer className='login__footer'>
          <span>
            @Fabian Figueroa Sistema de optimización, financiero, inventario y
            administración.
          </span>
        </footer>
      </div>
    </>
  );
};
export default LoginPage;
