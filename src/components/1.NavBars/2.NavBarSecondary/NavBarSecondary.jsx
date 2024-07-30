import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBarSecondary.css";

export default function NavBarSecondary() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav className={`${theme} NavBarSecondary`}>
      {/* Côté gauche de la NavBar secondaire */}
      <div className="LeftSide">
        <ul>
          <li><NavLink to="#" className="NavLink">Sixième</NavLink></li>
          <li><NavLink to="#" className="NavLink">Cinquième</NavLink></li>
          <li><NavLink to="#" className="NavLink">Quatrième</NavLink></li>
          <li><NavLink to="#" className="NavLink">Troisième</NavLink></li>
          <li><NavLink to="#" className="NavLink">Seconde</NavLink></li>
          <li><NavLink to="#" className="NavLink">Première</NavLink></li>
          <li><NavLink to="#" className="NavLink">Terminale</NavLink></li>
        </ul>
        <div className="Responsive1">
          <li><NavLink to="#" className="NavLink Responsive">Niveaux</NavLink></li>  
        </div>
      </div>

      {/* Centre de la NavBar secondaire */}
      <div className="Widgets Center">
        <button>Widgets</button>
      </div>

      {/* Côté droit de la NavBar secondaire */}
      <div className="RightSide">
        <div className="Responsive1">
          <li><NavLink to="#" className="NavLink Responsive">Favoris</NavLink></li>  
        </div>
        <ul>
          <li><NavLink to="#" className="NavLink">Épingle 1</NavLink></li>
          <li><NavLink to="#" className="NavLink">Épingle 2</NavLink></li>
          <li><NavLink to="#" className="NavLink">Épingle 3</NavLink></li>
          <li><NavLink to="#" className="NavLink">Épingle 4</NavLink></li>
          <li><NavLink to="#" className="NavLink">Épingle 5</NavLink></li>
          {isAuthenticated && (
            <li><NavLink to="#" className="NavLink" onClick={handleLogout}>Déconnexion</NavLink></li>
          )}
        </ul>
      </div>
    </nav>
  );
}
