
import { NavLink } from "react-router-dom";
import BtnDarkMode from "./../btnDarkMode/btn-dark-mode";
import "./navbar.css";
export default function Navbar()  {

  const activeLink = "nav-list__link nav-list__link--active";
  const defaultLink = "nav-list__link";

    return ( 
    <nav className="nav">
    <div className="container">
      <div className="nav-row">
        <BtnDarkMode />

        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink to = "/"className = {({isActive}) => isActive ? activeLink : defaultLink}>
              Home
            </NavLink>
          </li>
          <li className="nav-list__item">
          <NavLink to = "/projects"className = {({isActive}) => isActive ? activeLink : defaultLink}>
              Projects
            </NavLink>
          </li>
          <li className="nav-list__item">
          <NavLink to = "/contacts"className = {({isActive}) => isActive ? activeLink : defaultLink}т>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

}