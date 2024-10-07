// SideBar.jsx
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-container">
        <div className="home-header">
          <h2>Home</h2>
        </div>
        <ul>
          <li>
            <a href="#NuevosPedidos">Nuevos Pedidos</a>
          </li>
          <li>
            <a href="#Revistas">Revistas</a>
          </li>
          <li>
            <a href="#Opción1">Opción 1</a>
          </li>
          <li>
            <a href="#Opción2">Opción 2</a>
          </li>
          <li>
            <a href="#Opción3">Opción 3</a>
          </li>
          <li>
            <a href="#Opción4">Opción 4</a>
          </li>
          <li>
            <a href="#Opción5">Opción 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;