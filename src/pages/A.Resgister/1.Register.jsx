import React, { useContext, useState } from "react";
import "./1.1.Register.css";
import NavBarPrimary from '../../components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../components/2.NavBarSecondary/NavBarSecondary';

export default function Register() {
    
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }

  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div className={`${bodyTheme}Register Body`}>
          <NavBarPrimary handleTheme={handleTheme} />
          <NavBarSecondary />
          <h2>Register</h2>
    
        </div>
    )
}