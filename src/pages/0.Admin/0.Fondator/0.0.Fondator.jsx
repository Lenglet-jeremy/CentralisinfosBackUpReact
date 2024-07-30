import { useContext } from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import "./0.0.Fondator.css"
import { ThemeContext } from "../../../ThemeContext";

export default function Fondator(){
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        
        <div className="FondatorPage">

            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />

            <div className={`${bodyTheme} FondatorBody`} >
                {/* Pannel de Gauche */}
                <div className="NavPanel">
                    <ul>
                        <li>Tableau de bord</li>
                        <li>Utilisateurs</li>
                        <li>Profiles utilisateurs</li>
                        <li>Compte</li>
                        <li>Projets</li>
                        <li>Logs</li>
                    </ul>
                </div>

                {/* Panel de droite */}
                <div className="ViewPanel">
                    <div className="GlobalDatas">
                        
                        <div className="GlobalDatasCard">
                            <p>Tous utilisateurs</p>
                        </div>
                        
                        <div className="GlobalDatasCard">
                            Pages consultés
                        </div>
                        
                        <div className="GlobalDatasCard">
                            Nombre vu site
                        </div>

                        
                    </div>
                    <div className="Expenses">
                        <p>Graphe de dévolution de populariité du site</p>
                    </div>
                </div>
            </div>
        </div>
    )
}