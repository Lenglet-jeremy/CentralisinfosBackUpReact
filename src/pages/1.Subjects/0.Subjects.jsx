import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import NavBarPrimary from "../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

import "./0.Subjects.css"

export default function Subjects() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return(
        <div className={`${bodyTheme} SubjectsPage`}>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`SubjectsArea Body`}>

            <h2>Cours par disciplines</h2>
            <div className="CollegeLycee">
                <div className="Maths Section">
                    <div className="Title">
                        <p>Maths</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Numeration</a></li>
                        <li><a href="#">Calcul</a></li>
                        <li><a href="#">Géométrie</a></li>
                        <li><a href="#">Mesures</a></li>
                        <li><a href="#">Proportionnalité</a></li>
                        <li><a href="#">Fraction</a></li>
                        <li><a href="#">Nombres relatifs</a></li>
                        <li><a href="#">Equations</a></li>
                        <li><a href="#">Statistiques</a></li>
                        <li><a href="#">Probabilités</a></li>
                        <li><a href="#">Volumes</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

                <div className="Francais Section">
                    <div className="Title">
                        <p>Français</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Grammaire</a></li>
                        <li><a href="#">Conjugaison</a></li>
                        <li><a href="#">Orthographe</a></li>
                        <li><a href="#">Analyse de texte</a></li>
                        <li><a href="#">Figures de style</a></li>
                        <li><a href="#">Expression écrite</a></li>
                        <li><a href="#">Compréhension orale</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

                <div className="Anglais Section">
                    <div className="Title">
                        <p>Anglais</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Vocabulaire</a></li>
                        <li><a href="#">Grammaire anglaise</a></li>
                        <li><a href="#">Compréhension écrite</a></li>
                        <li><a href="#">Compréhension orale</a></li>
                        <li><a href="#">Expression orale</a></li>
                        <li><a href="#">Conjugaison anglaise</a></li>
                        <li><a href="#">Prononciation</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}
