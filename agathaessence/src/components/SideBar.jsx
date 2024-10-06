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
            <a href="#">Perfil</a>
          </li>
          <li>
            <a href="#">Pedidos</a>
          </li>
          <li>
            <a href="#">Nuevos Pedidos</a>
          </li>
          <li>
            <a href="#">Revistas</a>
          </li>
          <li>
            <a href="#">Opción 1</a>
          </li>
          <li>
            <a href="#">Opción 2</a>
          </li>
          <li>
            <a href="#">Opción 3</a>
          </li>
          <li>
            <a href="#">Opción 4</a>
          </li>
          <li>
            <a href="#">Opción 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;