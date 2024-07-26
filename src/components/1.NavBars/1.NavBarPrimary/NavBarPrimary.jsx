import React, { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink } from "react-router-dom";
import "./NavBarPrimary.css";

export default function NavBarPrimary({ handleTheme }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`${theme} NavBarPrimary`}>
      {/* Côté gauche de la NavBar primaire */}
      <ul className="LeftSide">
        <NavLink to="/" className="Logo" />
        <li className="Subjects">
          <NavLink to="#" className="NavLink">Disciplines</NavLink>
        </li>
        <li className="UniversityCourses">
          <NavLink to="#" className="NavLink">Cursus Universitaires</NavLink>
          <ul className="UniversityCoursesDropDown">
            <li><NavLink to="#">Développement Web</NavLink></li>
            <li><NavLink to="#">Comptabilité et Gestion</NavLink></li>
          </ul>
        </li>
        <label className="DarkLightThemeToggle">
          <input type="checkbox" onChange={handleTheme} />
          <span className="DarkLightThemeSlider"></span>
        </label>
      </ul>

      {/* Centre de la NavBar primaire */}
      <div className="SearchBarContainer">
        <label className="SearchBar">
          <img src="../../../../searchIcon.svg" alt="" />
          <input placeholder="Recherche" />
        </label>
      </div>
      <div className="SearchBarContainerResponsive">
        <button className="SearchBarResponsive">
          <img src="../../../../searchIcon.svg" alt="" />
          <input />
        </button>
      </div>

      {/* Côté droit de la NavBar Primaire */}
      <ul className="RightSide">
        <NavLink to="#" className="Gift">
          <img src='../../../../heart.png' alt="Coeur" />
          Tu m'offres un café ?
        </NavLink>
        <NavLink to="#" className="GiftResponsive">
          <img src='../../../../heart.png' alt="Coeur" />
        </NavLink>
        <li className="Tutos">
          <NavLink to="/Tutos">Tutos</NavLink>
        </li>
        <li><NavLink to="#" className="NavLink">Forum</NavLink></li>
        <NavLink to="/account">Compte</NavLink>
      </ul>
    </nav>
  );
}
