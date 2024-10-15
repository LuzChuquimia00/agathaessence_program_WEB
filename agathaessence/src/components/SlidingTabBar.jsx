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
  const [activeTab, setActiveTab] = useState("profile");
  const [showSideBar, setShowSideBar] = useState(false);
  const [showPerfilBar, setShowPerfilBar] = useState(false);

  const tabs = [
    { id: "profile", name: "Profile" },
    { id: "contact", name: "Contact" },
    { id: "requests", name: "Requests" },
    { id: "new-request", name: "New Request" },
  ];

  return (
    <nav className="nav-bar">
      <ul>
        <li className="icons-buttom">
          <a href="#home" onClick={() => {
            setActiveTab("profile");
            setShowSideBar(!showSideBar);
          }}>
            <RiHome2Line size={30}/>
          </a>
        </li>
      </ul>
      <Logo />
      <ul className="right-links">
        <li className="icons-buttom">
          <a href="#profile" onClick={() => setShowPerfilBar(!showPerfilBar)}>
            <RiAccountCircleFill size={30}/>
          </a>
        </li>
      </ul>
      {showSideBar && <SideBar />}
      {showPerfilBar && <PerfilBar />}
    </nav>
  );
}

export default SlidingNavigationBar;