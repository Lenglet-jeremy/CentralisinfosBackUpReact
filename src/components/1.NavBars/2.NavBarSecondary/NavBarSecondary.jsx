import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBarSecondary.css";

const NavBarSecondary = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const levels = ["Sixième", "Cinquième", "Quatrième", "Troisième", "Seconde", "Première", "Terminale"];
  const pins = ["Épingle 1", "Épingle 2", "Épingle 3", "Épingle 4", "Épingle 5"];

  return (
    <nav className={`${theme} NavBarSecondary`}>
      <div className="LeftSide">
        <ul>
          {levels.map((level, index) => (
            <li key={index}><NavLink to="#" className="NavLink">{level}</NavLink></li>
          ))}
        </ul>
        <div className="Responsive1">
          <li><NavLink to="#" className="NavLink Responsive">Niveaux</NavLink></li>  
        </div>
      </div>
      <div className="Widgets Center">
        <button>Widgets</button>
      </div>
      <div className="RightSide">
        <div className="Responsive1">
          <li><NavLink to="#" className="NavLink Responsive">Favoris</NavLink></li>  
        </div>
        <ul>
          {pins.map((pin, index) => (
            <li key={index}><NavLink to="#" className="NavLink">{pin}</NavLink></li>
          ))}
          {isAuthenticated && (
            <li><NavLink to="#" className="NavLink" onClick={handleLogout}>Déconnexion</NavLink></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBarSecondary;
