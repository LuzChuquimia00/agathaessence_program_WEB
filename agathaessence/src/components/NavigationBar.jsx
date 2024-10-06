import "./NavigationBar.css";

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
      </ul>
      <ul className="right-links">
        <li>
          <a href="#profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
