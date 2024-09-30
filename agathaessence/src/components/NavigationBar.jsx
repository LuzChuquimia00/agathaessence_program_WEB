import "./NavigationBar.css";
import SlidingNavigationBar from "./SlidingNavigationBar";

function NavigationBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="#home">Home</a>
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
      <SlidingNavigationBar />
    </nav>
  );
}

export default NavigationBar;
