import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Registrarme</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continuar</button>
        <p className="loginsignup-login">
          Ya tengo una cuenta <span>Iniciar sesion</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Acepto los terminos y condiciones de uso</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
