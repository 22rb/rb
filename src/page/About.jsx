import { Link, Outlet } from "react-router-dom";
import ProjectNavber from "../project/projectNavber";

export default function About() {
  return (
    <>
      <div>這是About</div>
      <ProjectNavber />
      <Link className="nav-link" to="about_index">
        about_index
      </Link>
      <br />
      <Link className="nav-link" to="about_page">
        about_page
      </Link>
      <hr />
      <Outlet />
    </>
  );
}
