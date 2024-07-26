import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import NavBarPrimary from "../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import Login from "./2.Login/1.0.Login";
import UserDashboard from "./3.UserDashboard/1.0.UserDashboard";
import "./0.1.Account.css";

export default function Account() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);


  return (
    <div className={`${bodyTheme} AccountPage`}>
      <div className="AccountNavBars">
        <NavBarPrimary handleTheme={toggleTheme} />
        <NavBarSecondary />
      </div>
      <div className="AccountBody">
        {isAuthenticated ? <UserDashboard /> : <Login />}
      </div>
    </div>
  );
}
