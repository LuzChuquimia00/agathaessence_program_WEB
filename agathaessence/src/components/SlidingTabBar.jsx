import "./NavigationBar.css";
import "./SlidingTabBar.css";
import { useState } from "react";
import SideBar from "./SideBar";
import PerfilBar from "./PerfilBar";
import Logo from "./LogoType";
import FooterBar from "./FooterBar";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiHome2Line } from "react-icons/ri";

function SlidingNavigationBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showPerfilBar, setShowPerfilBar] = useState(false);

  return (
    <nav className="nav-bar">
      <ul>
        <li className="icons-buttom">
          <a
            href="#home"
            onClick={() => {
              setShowSideBar(!showSideBar);
              setShowPerfilBar(false); // Cierra PerfilBar
            }}
          >
            <RiHome2Line size={30} />
          </a>
        </li>
      </ul>
      <Logo />
      <ul className="right-links">
        <li className="icons-buttom">
          <a
            href="#profile"
            onClick={() => {
              setShowPerfilBar(!showPerfilBar);
              setShowSideBar(false); // Cierra SideBar
            }}
          >
            <RiAccountCircleFill size={30} />
          </a>
        </li>
      </ul>
      {showSideBar && <SideBar />}
      {showPerfilBar && <PerfilBar />}
      <FooterBar />
    </nav>
  );
}

export default SlidingNavigationBar;
