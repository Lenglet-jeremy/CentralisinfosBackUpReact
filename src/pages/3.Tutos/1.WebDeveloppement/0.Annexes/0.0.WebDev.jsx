import { NavLink } from "react-router-dom";
import NavBarPrimary from '../../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary';
import "./0.0.WebDev.css";
import { useState } from "react";

export default function WebDev() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className="Container">
            <div className={`${bodyTheme} Body`}>
                    <NavBarPrimary handleTheme={handleTheme} />
                    <NavBarSecondary />
                <div className="Sommary">
                    {/* NavLink... */}
                    <NavLink to={"Express"}>Créer un serveur express </NavLink>
                    <NavLink to={"Routes"}>Architecturer les routes</NavLink>
                    <NavLink to={"MongoDB"}>Paramétrer MongoDB</NavLink>
                    <NavLink to={"Mongoose"}>Utiliser Mongoose</NavLink>
                </div>
            </div>
        </div>
    )
}
