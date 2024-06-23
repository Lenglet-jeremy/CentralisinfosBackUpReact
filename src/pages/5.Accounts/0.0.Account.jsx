import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import NavBarPrimary from "../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import Register from "./1.Register/1.0.Register";
import Login from "./2.Login/1.0.Login";
import UserDashboard from "./3.UserDashboard/1.0.UserDashboard";
import "./0.1.Account.css";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  return (
    <div className={`${bodyTheme} AccountPage`}>
      <div className="AccountNavBars">
        <NavBarPrimary handleTheme={toggleTheme} />
        <NavBarSecondary />
      </div>
      <div className="AccountBody">
        {isAuthenticated ? <UserDashboard /> : <>
          <Register />
          <Login />
        </>}
      </div>
    </div>
  );
}
