// SlidingNavigationBar.jsx
import "./NavigationBar.css";
import { useState } from "react";
import SideBar from "./SideBar";
import PerfilBar from "./PerfilBar";
import Logo from "./Logo";
import { RiAccountCircleFill } from "react-icons/ri";

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
        <li className="nav-bar-buttom">
          <a href="#home" onClick={() => {
            setActiveTab("profile");
            setShowSideBar(!showSideBar);
          }}>
            Home
          </a>
        </li>
      </ul>
      <Logo />
      <ul className="right-links">
        <li className="nav-bar-buttom">
          <a href="#profile" onClick={() => setShowPerfilBar(!showPerfilBar)}>
            <RiAccountCircleFill size={35}/>
          </a>
        </li>
      </ul>
      {showSideBar && <SideBar />}
      {showPerfilBar && <PerfilBar />}
    </nav>
  );
}

export default SlidingNavigationBar;