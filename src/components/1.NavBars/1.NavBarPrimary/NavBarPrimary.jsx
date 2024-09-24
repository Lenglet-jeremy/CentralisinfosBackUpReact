import React, { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink } from "react-router-dom";
import "./NavBarPrimary.css";

const NavBarPrimary = ({ handleTheme }) => {
  const { theme } = useContext(ThemeContext);
  const navItems = [
    { to: "#", label: "Disciplines" },
    { to: "#", label: "Cursus Universitaires"}
  ];

  const renderDropdown = (dropdown) => (
    <ul className="UniversityCoursesDropDown">
      {dropdown.map((item, index) => (
        <li key={index}><NavLink to={item.to}>{item.label}</NavLink></li>
      ))}
    </ul>
  );

  return (
    <nav className={`${theme} NavBarPrimary`}>
      <ul className="LeftSide">
        <NavLink to="/" className="Logo" />
        
        {navItems.map((item, index) => (
          <li key={index} className={item.dropdown ? "UniversityCourses" : "Subjects"}>
            <NavLink to={item.to} className="NavLink">{item.label}</NavLink>
            {item.dropdown && renderDropdown(item.dropdown)}
          </li>
        ))}
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
      <div className="SearchBarContainerResponsive">
        <button className="SearchBarResponsive">
          <img src="../../../../searchIcon.svg" alt="" />
          <input />
        </button>
      </div>
      <ul className="RightSide">
        <NavLink to="#" className="Gift">
          <img src='../../../../heart.png' alt="Coeur" />
          Tu m'offres un café ?
        </NavLink>
        <NavLink to="#" className="GiftResponsive">
          <img src='../../../../heart.png' alt="Coeur" />
        </NavLink>
        <li><NavLink to="/Tutos" className="NavLink">Tutos</NavLink></li>
        <li><NavLink to="#" className="NavLink">Forum</NavLink></li>
        <NavLink to="/account">Compte</NavLink>
      </ul>
    </nav>
  );
};

export default NavBarPrimary;
