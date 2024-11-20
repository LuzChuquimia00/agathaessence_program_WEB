import React, { useState } from "react";
import { createUser } from "./api";

const LoginForm = () => {
  const [action, setAction] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ name: username, email, password });
      alert(response.data.message);
      setAction(""); // Regresar al login tras el registro exitoso
    } catch (error) {
      alert(error.response.data.error || "Error al registrar");
    }
  };

  const registerLink = () => setAction(" active");
  const loginLink = () => setAction("");

  return (
    <div className={`wrapper${action}`}>
      {/* Formulario de registro */}
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registro</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrar</button>
          <p>
            Ya tienes una cuenta?{" "}
            <a href="#" onClick={loginLink}>
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
