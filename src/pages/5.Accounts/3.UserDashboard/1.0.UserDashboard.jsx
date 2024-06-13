import "./1.1.UserDashboard.css";
import NavBarPrimary from "../../../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/2.NavBarSecondary/NavBarSecondary";
import { useEffect, useState } from "react";

export default function UserDashboard() {
    const [theme, setTheme] = useState("DarkTheme");


    function handleTheme() {
        setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className={`${bodyTheme} AccountPage`}>
            <div className="AccountNavBars">
                <NavBarPrimary handleTheme={handleTheme} />
                <NavBarSecondary />
            </div>
            <div className={`UserDashboardPage`}>
                <div className="BodyUserDashboard">
                    <h1>Tableau de bord utilisateur</h1>
                    <p>Bienvenue sur votre tableau de bord utilisateur.</p>
                </div>
            </div>
        </div>
    );
}