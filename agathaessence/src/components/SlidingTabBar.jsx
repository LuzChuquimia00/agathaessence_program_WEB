import "./NavigationBar.css";
import { useState } from "react";
import SideBar from "./SideBar";
import PerfilBar from "./PerfilBar";

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
        <li>
          <a href="#home" onClick={() => {
            setActiveTab("profile");
            setShowSideBar(!showSideBar);
          }}>
            Home
          </a>
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <a href="#profile" onClick={() => setShowPerfilBar(!showPerfilBar)}>
            Perfil
          </a>
        </li>
      </ul>
      {showSideBar && <SideBar />}
      {showPerfilBar && <PerfilBar />}
    </nav>
  );
}

export default SlidingNavigationBar;