import { NavLink } from "react-router-dom";
import NavBarPrimary from '../../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary';
import "./0.0.WebDev.css";
import { useContext } from "react";
import { ThemeContext } from "../../../../ThemeContext";

export default function WebDev() {
    const { theme, toggleTheme } = useContext(ThemeContext);
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className="Container">
            <div className={`${bodyTheme} Body`}>
                    <NavBarPrimary handleTheme={toggleTheme} />
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
