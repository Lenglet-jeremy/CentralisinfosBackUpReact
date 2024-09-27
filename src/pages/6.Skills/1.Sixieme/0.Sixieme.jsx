import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

import "./0.Sixieme.css"

export default function Sixieme() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className={`${bodyTheme} SixiemePage`}>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className="SixiemeArea Body">
                
                <h2>cours par Niveaux : 6e</h2>
                <div className="Sixieme">
                    <div className="Français Section">
                        <div className="Title">
                            <p>Français</p>
                        </div>
                        <div className="Content">
                            <li><a href="#">Etude de la langue</a></li>
                            <li><a href="#">Lecture et analyse de texte</a></li>
                            <li><a href="#">Rédaction</a></li>
                            <li><a href="#">Expression Orale</a></li>
                            <li><a href="#">...</a></li>
                        </div>
                    </div>
                    
                    <div className="Maths Section">
                        <div className="Title">
                            <p>Maths</p>
                        </div>
                        <div className="Content">
                            <li><a href="#">Nombres et calculs</a></li>
                            <li><a href="#">Géométrie</a></li>
                            <li><a href="#">Grandeur et mesures</a></li>
                            <li><a href="#">Proportionnalités</a></li>
                            <li><a href="#">...</a></li>
                        </div>
                    </div>
                    
                    <div className="HistoireGeo Section">
                        <div className="Title">
                            <p>HistoireGeo</p>
                        </div>
                        <div className="Content">
                            <li><a href="#">Histoire : </a></li>
                            <li><a href="#">    1er Guerre</a></li>
                            <li><a href="#">    2e Guerre</a></li>
                            <li><a href="#">Géo : </a></li>
                            <li><a href="#">    Carte de France </a></li>
                            <li><a href="#">    Carte du monde</a></li>
                            <li><a href="#">...</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}