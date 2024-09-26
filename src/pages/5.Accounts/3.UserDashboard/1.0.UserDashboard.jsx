import React, { useContext, useEffect, useState } from "react";
import "./1.1.UserDashboard.css";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { ThemeContext } from "../../../ThemeContext";

export default function UserDashboard() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/'); // Use navigate instead of Navigate
  };

  return (
    <div className={`${bodyTheme} AccountPage`}>
      <div className="UserDashboardPage">
        <div className="BodyUserDashboard">
          <h1>Tableau de bord utilisateur</h1>
          <p>Bienvenue sur votre tableau de bord utilisateur.</p>
          <NavLink to="/tutos"> Tutos</NavLink>
          <NavLink to="writingcourses"> Rédaction de cours</NavLink>
        </div>
        <div>
          {isAuthenticated && (
            <li><a href="#" className="NavLink" onClick={handleLogout}>Déconnexion</a></li>
          )}
        </div>
      </div>
    </div>
  );
}
