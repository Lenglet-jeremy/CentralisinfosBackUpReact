import React, { useState } from "react";
import NavBarPrimary from '../components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../components/2.NavBarSecondary/NavBarSecondary';
import "./1.1.HomePage.css";

export default function HomePage() {
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }
    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className={`${bodyTheme} Body`}>
          <NavBarPrimary handleTheme={handleTheme} />
          <NavBarSecondary />
          <h1>CE SITE EST EN PLEIN DEVELOPPEMENT ! </h1>
          <h2>Centralisinfos : Pour l'Unification de la Culture et de la Connaissance</h2>
          <p>Bonjour à tous, ce site sera dédié à la centralisation des cours du début collége jusqu'a BAC + X de tous Cursus</p>
    
    
        </div>
    )
}