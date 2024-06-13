import "./NavBarPrimary.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ handleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <nav className={`${theme} NavBarPrimary`}>
      <ul className="LeftSide">
        <a href="/" className="Logo" />
        <li className="Subjects">
          <a href="#" style={{ color: '#555555' }}>Disciplines</a>
          <ul className="SubjectsDropDown">
            <li><a href="#">Français</a></li>
            <li><a href="#">Anglais</a></li>
            <li><a href="#">Maths</a></li>
          </ul>
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
      <div className="SearchBarContainer">
        <label className="SearchBar">
          <img src="../../../../searchIcon.svg" alt="" />
          <input placeholder="Recherche" />
        </label>
      </div>
      <ul className="RightSide">
        <a href="#" className="Gift">
          <img src='../../../../heart.png' alt="Coeur" />
          Tu m'offres un café ?
        </a>
        <li className="Tutos">
          <a href="#" style={{ color: '#555555' }}>Tutos</a>
          <ul className="TutosDropdown">
            <li><NavLink to={"WebDev"}>Developpement Web</NavLink></li>
            <li><a href="#">File Manager</a></li>
            <li><a href="#">Faire mumuse avec Python et Excel</a></li>
          </ul>
        </li>
        <li><a href="#" style={{ color: '#555555' }}>Forum</a></li>
        <NavLink to="/account">Compte</NavLink>
      </ul>
    </nav>
  );
}
