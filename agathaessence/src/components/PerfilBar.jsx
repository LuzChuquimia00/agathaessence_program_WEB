// PerfilBar.jsx
import "./PerfilBar.css";
import { RiBriefcaseLine } from "react-icons/ri";
import { FaGear } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import UserConfig from "./Pages/ConfigUser";

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
            <p>Rango de Usuario: Golden</p>
          </li>
          <li>
            <a to="/HistorialDePedidos" className="perfil-button">
              Historial de pedidos{" "}
              <RiBriefcaseLine
                size={20}
                style={{ position: "relative", top: "6px", right: "1px" }}
              />
            </a>
          </li>
          <li>
            <Link to="/user-config" className="perfil-button">
              Configuración de cuenta{" "}
              <FaGear
                size={20}
                style={{ position: "relative", top: "6px", right: "1px" }}
              />
            </Link>
          </li>
          <li>
            <a to="#CerrarSesión" className="perfil-button">
              Cerrar sesión{" "}
              <BiLogOut
                size={20}
                style={{ position: "relative", top: "6px", right: "1px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PerfilBar;
