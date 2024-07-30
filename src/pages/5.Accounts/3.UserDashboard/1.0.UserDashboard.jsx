import React, { useContext } from "react";
import "./1.1.UserDashboard.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";

export default function UserDashboard() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  return (
    <div className={`${bodyTheme} AccountPage`}>
      <div className="UserDashboardPage">
        <div className="BodyUserDashboard">
          <h1>Tableau de bord utilisateur</h1>
          <p>Bienvenue sur votre tableau de bord utilisateur.</p>
          <NavLink to="writingcourses"> Redaction de cours</NavLink>
        </div>
      </div>
    </div>
  );
}
