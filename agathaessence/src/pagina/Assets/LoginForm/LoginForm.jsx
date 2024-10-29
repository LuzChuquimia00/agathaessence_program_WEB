import React from "react";
import "./LoginForm";
import { FaUser, FaLock} from "react-icons/fa"; //icon de usuario FaUser, icon de contraseña FaLock.
const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon"/>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Guardar Cuenta 
          </label>
          <a href="#">Olvidaste la Contraseña?</a>
        </div>

        <button type="submit">Login</button>
      
        <div className="register-link">
          <p>No tienes cuenta? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
