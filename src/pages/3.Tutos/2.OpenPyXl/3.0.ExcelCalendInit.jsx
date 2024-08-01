import "./3.0.ExcelCalendInit.css"
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

export default function ExcelCalendInit(){
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return(
        <div>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} Body ExcelCalendInitPage`}>
                <div className={`ExcelCalendInitBody`}>
                    
                    <div className="Sommary">
                        <p>Sommary</p>
                    </div>

                    <h2>Initialisation du projet</h2>
                    <p className="DetailsEleve">Commencez par ouvrir un fichier Excel</p>
                </div>
            </div>
        </div>
    )
}