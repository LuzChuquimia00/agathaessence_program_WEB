import "./NavigationBar.css";
import NewRequest from "./NewRequest";
import Contact from "./Contact";
import Profile from "./Profile";
import Requests from "./Requests";

function SlidingNavigationBar() {
  const [activeTab, setActiveTab] = useState("profile");

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
          <a href="#home" onClick={() => setActiveTab("profile")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <a href="#profile">Profile</a>
        </li>
      </ul>
      <div id="mySidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => setActiveTab("")}
        >
          ×
        </a>
        <ul>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <a
                href="#"
                className={activeTab === tab.id ? "active" : ""}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          {activeTab === "profile" && <Profile />}
          {activeTab === "contact" && <Contact />}
          {activeTab === "requests" && <Requests />}
          {activeTab === "new-request" && <NewRequest />}
        </div>
      </div>
    </nav>
  );
}

export default SlidingNavigationBar;
