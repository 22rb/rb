import { Link } from "react-router-dom";

export default function Navber() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Navber</h1>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
