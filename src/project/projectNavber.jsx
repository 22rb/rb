import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>projectNavber</h1>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="about_index">
              projectHome
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about_page">
              projectAbout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
