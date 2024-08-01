import { useContext } from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { ThemeContext } from "../../../ThemeContext";

import "./2.0.ExcelInstall.css"

export default function ExcelInstall() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div>
        <NavBarPrimary handleTheme={toggleTheme} />
        <NavBarSecondary />
            <div className={`${bodyTheme} Body`}>
                <div className="Title">
                    <h1>Installation d'Excel</h1>
                </div>
                    <div className="ExcelInstallArea">
                        <div className="Sommary">
                            <p>Sommary</p>
                        </div>

                        <div className="ExcelInstallCourse">
                            <p>Pour pouvoir utiliser Excel il nous faudra l'installer, dans le cours qui suis je vais utiliser microst Office 365</p>
                            <p>Pour installer Excel commencez par aller sur le site de <a href="https://www.microsoft.com/" target="blanck">Microsoft</a> et connecter vous à votre compte</p>
                            <p>Allez ensuite dans l'onglet <a href="https://www.microsoft.com/fr-fr/microsoft-365/business/compare-all-microsoft-365-business-products"> Offres et tarifs</a></p>
                        </div>
                    </div>
            </div>
        </div>
    )
}