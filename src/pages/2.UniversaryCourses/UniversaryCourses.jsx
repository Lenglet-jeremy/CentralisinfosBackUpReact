import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import "./UniversaryCourses.css"
import NavBarPrimary from "../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

export default function UniversaryCourses() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return(
        <div className={`${bodyTheme} UniversaryCoursesPage`}>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`UniversaryCoursesArea Body`}>

            <p>Cursus universitaires (Diplomes)</p>
            <div className="CursusUniversitaires">
                <div className="LicenceProInformatique Section">
                    <div className="Title">
                        <p>Licence profetionnelle Informatique</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Anglais Technique</a></li>
                        <li><a href="#">Architecture des ordinateurs</a></li>
                        <li><a href="#">Introduction aux mathématique général</a></li>
                        <li><a href="#">Pratique, installation et utilisation</a></li>
                        <li><a href="#">Preparation a la logique</a></li>
                        <li><a href="#">preparation C2I</a></li>
                        <li><a href="#">Programmation fonctionnelle</a></li>
                        <li><a href="#">Programmation imperative 1</a></li>
                        <li><a href="#">Chaines de caracteres</a></li>
                        <li><a href="#">Programmation logique</a></li>
                        <li><a href="#">Technique expression</a></li>
                        <li><a href="#">Utilisation ordinateur en reseau</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

                <div className="BTSCG Section">
                    <div className="Title">
                        <p>BTS Comptabilité Gestion</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Contrôle et traitement comptable des opérations commerciales</a></li>
                        <li><a href="#">Contrôle et production de l'activité financière</a></li>
                        <li><a href="#">Gestion des obligations fiscales</a></li>
                        <li><a href="#">Gestion des relations sociales</a></li>
                        <li><a href="#">Analyse et prévision de l'activité</a></li>
                        <li><a href="#">Analyse de la situation financière</a></li>
                        <li><a href="#">Fiabilisation de l'information et système de l'information comptable</a></li>
                        <li><a href="#">Situations professionnelles</a></li>
                        <li><a href="#">Culture générale et expression</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

            </div>

            
            <p>Projets (Titre Pro)</p>

            <div className="DevWeb Section">
                <div className="Title">
                    <p>Developpement web et web mobile</p>
                </div>
                <div className="Content">
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">Javascript</a></li>
                    <li><a href="#">ExpressJS</a></li>
                    <li><a href="#">NodeJS/MongoDB</a></li>
                    <li><a href="#">...</a></li>
                </div>
            </div>
            </div>
        </div>
    )
}
