
import { useContext } from 'react';
import NavBarPrimary from '../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary';
import { NavLink } from 'react-router-dom';
import "./0.0.Tutos.css";
import { ThemeContext } from '../../ThemeContext';

export default function Tutos() {
  
    const { theme, toggleTheme } = useContext(ThemeContext);
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className= "Container">
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} Body`}>
            <h2>Cours tutos</h2>
            <div className="Dev">
                <div className="Cpp Section">
                    <div className="Title">
                        <p>C++</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Variables et types de données</a></li>
                        <li><a href="#">Boucles et conditions</a></li>
                        <li><a href="#">Fonctions</a></li>
                        <li><a href="#">Classes et objets</a></li>
                        <li><a href="#">Héritage</a></li>
                        <li><a href="#">Polymorphisme</a></li>
                        <li><a href="#">Pointeurs</a></li>
                        <li><a href="#">Gestion de la mémoire</a></li>
                        <li><a href="#">Templates</a></li>
                        <li><a href="#">STL (Standard Template Library)</a></li>
                        <li><a href="#">Exceptions</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

                <div className="Python Section">
                    <div className="Title">
                        <p>Python</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Introduction et installation</a></li>
                        <li><a href="#">Variables et types</a></li>
                        <li><a href="#">Listes, tuples, et dictionnaires</a></li>
                        <li><a href="#">Boucles et conditions</a></li>
                        <li><a href="#">Fonctions</a></li>
                        <li><a href="#">Gestion des fichiers</a></li>
                        <li><a href="#">Programmation orientée objet</a></li>
                        <li><a href="#">Modules et packages</a></li>
                        <li><a href="#">Gestion des erreurs</a></li>
                        <li><a href="#">Librairies scientifiques (NumPy, pandas)</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>

                <div className="Qt Section">
                    <div className="Title">
                        <p>Qt</p>
                    </div>
                    <div className="Content">
                        <li><a href="#">Installation et configuration</a></li>
                        <li><a href="#">Introduction aux widgets</a></li>
                        <li><a href="#">Signaux et slots</a></li>
                        <li><a href="#">Gestion des événements</a></li>
                        <li><a href="#">Création de fenêtres</a></li>
                        <li><a href="#">Layouts et gestion du design</a></li>
                        <li><a href="#">Qt Designer</a></li>
                        <li><a href="#">Interactions avec les fichiers</a></li>
                        <li><a href="#">Bases de données avec Qt</a></li>
                        <li><a href="#">Déploiement d'une application Qt</a></li>
                        <li><a href="#">...</a></li>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}