import "./3.0.ExcelCalendInit.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../ThemeContext";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

import ExcelInitialisation from "./img/initialisation-Excel.webp";

export default function ExcelCalendInit() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [detailsLevel, setDetailsLevel] = useState('élevé');

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} Body ExcelCalendInitPage`}>
                <div className={`ExcelCalendInitBody`}>
                    
                    <div className="Sommary">
                        <p>Sommary</p>
                    </div>
                    
                    <h2>Initialisation du projet</h2>
                    
                    {/* Boutons de sélection du niveau de détails */}
                    <div className="DetailsButtons">
                        <button onClick={() => setDetailsLevel('faible')}>détails : faible</button>
                        <button onClick={() => setDetailsLevel('moyen')}>détails : moyen</button>
                        <button onClick={() => setDetailsLevel('élevé')}>détails : élevé</button>
                    </div>
                    
                    <div className="CourseBody">
                        <p>Commencez par ouvrir un fichier Excel</p>
                        <p>Nous allons commencer par formater la largeur des colonnes B à AK (B:AK)</p>
                        
                        <p>La colonne A nous servira plus tard comme panneau de controle</p>

                        {detailsLevel === 'élevé' && (
                            <p>Pour ajuster la largeur d'un colonne 
                            vous devez rester cliquer sur la barre latéral de droite de la colonne <br />
                            que vous souhaitez redimmentionner et glisser votre souris de droite à gauche <br />
                            pour augmenter/reduire la taille de la colonne</p>
                        )}
                        
                        {   detailsLevel === 'élevé' && (
                        <img src={ExcelInitialisation} alt="Initialisation Excel" />
                        )}
                        
                        
                        {detailsLevel !== 'faible' && (
                            <div>
                                <p> Si vous souhaitez redimmentionner plusieurs colonnes vous avez deux possibilités : </p>
                                <pre>    Selectionner la colonne B, rester appuyé sur shift, la touche juste au dessus de votre touche Ctrl <br /> 
                                (tout en bas à gauche de votre clavier), <br />
                                celà aura pour effet de selectionner toutes les colonnes entre la colonne B et la dernière sur laquelle vous aurez cliqué</pre>
                                <pre>    Rester appuyé sur Ctrl (tout en bas à gauche de votre clavier), <br />
                                 celà aura pour effet de selectionner les colonnes sur lesquelles vous aurez cliqué</pre>
                            </div>
                        )}

                        {detailsLevel !== 'faible' && (
                            <div>
                                <p>Commencez par paramétrer la colonne B d'une largeur de 2 unités (19 pixels),la colonne C d'une largeur de 4,14 unités (34 pixels) et la colonne D à 12,57 unités (93 pixels)</p>
                                <p>Ensuite, cliquer sur la colonne B et tout en restant appuyé allez jusqu'a la colonne D, cliquez sur "Reproduire la mise en forme" puis selectionné la plage de colonne E:AK</p>
                                <iframe src="https://onedrive.live.com/embed?resid=F7CF7201558D3C58%211184&authkey=!AOgbGlgeeAqeYCM" width="800" height="320" frameborder="0" scrolling="no" allowfullscreen></iframe>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}
