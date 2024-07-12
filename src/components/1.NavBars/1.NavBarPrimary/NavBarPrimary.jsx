import React, { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink } from "react-router-dom";
import "./NavBarPrimary.css";

export default function NavBarPrimary({ handleTheme }) {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`${theme} NavBarPrimary`}>
      {/* Coter Gauche de la NavBar primaire */}
      <ul className="LeftSide">
        <a href="/" className="Logo" />
        <li className="Subjects">
          <a href="#" style={{ color: '#555555' }}>Disciplines</a>
        </li>
        <li className="UniversityCourses">
          <a href="#" style={{ color: '#555555' }}>Cursus Universitaires</a>
          <ul className="UniversityCoursesDropDown">
            <li><a href="#">Developpement Web</a></li>
            <li><a href="#">Comptabilité et Gestion</a></li>
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

      {/* Coter Droit de la NavBar Primaire */}
      <ul className="RightSide">

        <a href="#" className="Gift">
          <img src='../../../../heart.png' alt="Coeur" />
          Tu m'offres un café ?
        </a>
        <a href="#" className="GiftResponsive">
          <img src='../../../../heart.png' alt="Coeur" />
        </a>

        <li className="Tutos">
          <NavLink to={"/Tutos"}>Tutos</NavLink>
        </li>
        <li><a href="#" style={{ color: '#555555' }}>Forum</a></li>
        <NavLink to="/account">Compte</NavLink>
      </ul>
    </nav>
  );
}
