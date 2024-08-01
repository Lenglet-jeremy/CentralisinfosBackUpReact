import { useContext} from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { NavLink } from "react-router-dom";
import "./1.0.OpenPyXl.css"
import "../1.WebDeveloppement/2.JS/0.Annexes/1.StylingTutos.css"
import { ThemeContext } from "../../../ThemeContext";

export default function OpenPyXl() {
      const { theme, toggleTheme } = useContext(ThemeContext);

      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div>
        <NavBarPrimary handleTheme={toggleTheme} />
        <NavBarSecondary />
        <div className={`${bodyTheme} Body`}>
          <div className="Title">
            <h1>OpenPyXl</h1>
          </div>
            <div className='CoursesArea '>
                <div className="Sommary">
                    <NavLink to={"#"}>Presentation du projet</NavLink>
                    <NavLink to={"ExcelInstall"}>Installation d'Excel</NavLink>
                </div>
                
                <div className='BodyCourses'>
                  
                  <p className="ProjectDisplay">Presentation du projet</p>
                  <div className="Section">
                    <p>Bonjour à tous ! Dans le cours qui suis nous allons apprendre à créer le fichier Excel qui suis : </p>
                    <p className="BOLD">VIDEO DE PRESENTATION DU CALENDRIER EXCEL FINAL</p>
                  </div>
                    <div className="Section">
                      <pre>
                      <p>Résultat attendu : </p>
                      <p>    L'idée est de pouvoir mettre à jour : </p>
                        <p>        Les jours de l'année ;</p>
                        <p>        La prise en compte des années bisextiles ;</p>
                        <p>        La mise à jour du contenu des cellules "vides" du calendrier ;</p>
                        <br />
                        <p>    Donner la possibilité à l'utilisateur : </p>
                        <p>        De visualiser les 10 dernières années en 1 clique</p>
                        <p>        De visualiser les données selon un double système de clés/valeurs
                          <span className="tooltip-container">
                            <span className="tooltip-icon">?</span>
                            <span className="tooltip-text">Pour faire apparaître les factures intérimaires par exemple</span>
                          </span>
                        </p>
                        <br />
                        <p>    Implemeter un theme Jour/Nuit pour ceux qui bossens le soir.</p>
                      </pre>
                    </div>
                    <div className="Section">
                      <p>Pour cela nous allons devoir commencer par l'<NavLink to={"ExcelInstall"}>Installation d'Excel</NavLink></p>
                    </div>
                  <div className="PreviousNext">
                    <div className="Previous">

                    </div>
                    <div className="Next">
                      <NavLink to={"ExcelInstall"}>Installation d'Excel</NavLink>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
    )
}