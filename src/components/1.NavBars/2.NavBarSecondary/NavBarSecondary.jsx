import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";
import { useNavigate } from "react-router-dom";
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
      {/* Coter gauche de la NavBar secondaire */}
      <div className="LeftSide">
        <ul>
          <li><a href="#" style={{ color: '#555555' }}>Sixieme</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Cinquieme</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Quatrieme</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Troisieme</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Seconde</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Premiere</a></li>
          <li><a href="#" style={{ color: '#555555' }}>Terminale</a></li>
        </ul>
        <div className="Responsive1">
          <li><a href="#" style={{ color: '#555555' }} className="Responsive">Niveaux</a></li>  
        </div>
      </div>

    {/* Centre de la NavBar secondaire */}
    <div className="Widgets Center">
      <button>Widgets</button>
    </div>

      {/* Coter droit de la NavBar secondaire */}
      <div className="RightSide">
        
      <div className="Responsive1">
        <li><a href="#" style={{ color: '#555555' }} className="Responsive">Favoris</a></li>  
      </div>
      <ul>
          <li><i><a href="#" style={{ color: '#555555' }}>Epingle 1</a></i></li>
          <li><i><a href="#" style={{ color: '#555555' }}>Epingle 2</a></i></li>
          <li><i><a href="#" style={{ color: '#555555' }}>Epingle 3</a></i></li>
          <li><i><a href="#" style={{ color: '#555555' }}>Epingle 4</a></i></li>
          <li><i><a href="#" style={{ color: '#555555' }}>Epingle 5</a></i></li>
          {isAuthenticated && (
            <li><i><a href="#"  onClick={handleLogout}>Deconnexion</a></i></li>
          )}
        </ul>
      </div>
    </nav>
  );
}
