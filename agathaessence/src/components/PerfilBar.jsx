// PerfilBar.jsx
import "./PerfilBar.css";

function PerfilBar() {
  return (
    <div className="perfil-bar">
      <div className="perfil-bar-header">
        <h2>Perfil</h2>
      </div>
      <div className="perfil-bar-container">
        <ul>
            <li>
            <p>Información Personal: Usuario</p>
            <p>Rango de Usuario: Golden </p>
            </li>
          <li>
            <a href="#" className="perfil-button">Historial de pedidos</a>
          </li>
          <li>
            <a href="#" className="perfil-button">Configuración de cuenta</a>
          </li>
          <li>
            <a href="#" className="perfil-button">Cerrar sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PerfilBar;