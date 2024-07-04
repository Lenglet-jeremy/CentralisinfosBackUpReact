import { useContext, useState } from "react";
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
                      <NavLink to={"/Tutos/WebDev"} >Instalation de l'environnement de developpement</NavLink>
                  </div>
                  
                  <div className='BodyCourses'>
                    <div className="Section">
                      <p>Bonjour à tous ! Dans le cours qui suis nous allons apprendre à créer le fichier Excel qui suis : </p>
                      <iframe src="https://onedrive.live.com/embed?resid=F7CF7201558D3C58%211180&authkey=!ANarTfY9xSHXBCw&em=2" width="402" height="346" frameborder="0" scrolling="no"></iframe>
                    </div>

                      <div className="Section">
                        <p>L'idée est de pouvoir mettre à jour le calendrier en fonction de l'année dans la cellule AK0 : </p>
                        
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;Les jours de l'année ;</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;La prise en compte des années bisextiles ;</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;La mise à jour du contenu des cellules "vides" du calendrier ;</p>
                        
                      </div>

                      <div className="Section">
                        <p>Nous allons commencer par le squelette. il faut donc savoir ce que le calendrier comportera, dans notre cas : </p>
                    
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;Les numeros des jours et des mois de l'année : qui nous permettra plus tard de faire la somme d'une colonne désirée dans la base de donnée (BDD) jour par jour</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;Ainsi que les trois premières lettres de chaque jours de la semaine, ça nous permettra de mettre en evidence les week end</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;Et le plus important, le titre du Calendrier. Dans notre cas nous allons faire quelque de simple mais de terriblement efficace le mot "Calendrier" suivi du numero de l'année désiré</p>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;Pour l'instant, nous allons mettre une valeur fixe, que nous allons rendre dynamique plus tard</p>
                        
                        <p>Pour les numemros des jours et des mois nous allons tous rentré manuellement, par contre concernant la description des jours pour allons nous aider de fonctions, de sorte à rendre notre calendrier dynamique</p>
                      </div>
                      {/* Screenshot */}

                      <div className="Section">
                        <p>Maintenant que nous avons le squelette, nous pouvons passer à la mise en forme</p>
                        <p>Vous pouvez soit dimentionneler les collonne à votre guise, soit les adapter à leurs contenu</p>

                        {/* Niveau de détails : Elevé */}
                        <p>Pour ajuster la largeur d'une colonne, placez votre souris sur une barre blanche séparant deux colonnes </p>
                        {/* Screenshot */}
                        <p>Tout en gardant le clique gauche appuyé décalez votre souris de gauche à droite pour ajuster la largeur de la colonne à la gauche de votre souris</p>
                        <p>Sinon, vous pouvez adapter toute les colonnes à leurs contenu en cliquant sur le petit espace en haut à gauche entre séparant les lignes et les colonnes</p>
                        {/* Gif */}

                        <h3>Rendre dynamique les jours de l'année</h3>
                        <p>Bon ! Un gros morceau mais pas de stress ! Nous allons commencer par déterminer le premier jour de l'année</p>
                        <p>Pour déterminer le premier jour de l'année nous pouvons nous servir de la fonction DATE() qui prend en parametre 3 argument, l'année, le mois et le jour, et qui nous renvoie le nombre de jours passé depuis le 01/01/1900.</p>
                        <p>nous pouvons nous servir de ce numero avec la fonction JOURSEM() qui lui prend un numero de series... descriptif du nombre de jour passée depuis le 01/01/1900... La hasard est bien fais n'est-il pas ? </p>
                        <p>Le probleme est que nous souhaitons non pas un chiffre mais une chaine de 3 caractéres descriptif du jour concerné.</p>
                        <p>Nous pouvons résoudre ce probleme en établisant un tableau faisant la laison entre les numeros des jours de la semaines avec leur descriptions</p>
                        {/* Screenshot */}
                        <p>Une fois que nous avons ce tableau nous pouvons apeler la fonction RECHERCHEV() qui renvoie de maniere symétrique la valeur recherché</p>
                        {/* Screenshot */}
                        <p>Mise au point : la fonction DATE() nous renvoie le nombre de jour passé depuis le 01/01/1900, la fonction JOURSEM prend ce nombre pour le traduire en numero de jour de semaine et enfin la fonction RECHERCHEV() qui nous renvoie sa correspondance par rapport au tableau que nous avons établie</p>
                        
                        
                        
                        <p>Maintenannt que le premier jour de l'année est déterminé, nous allons nous en servir pour determiner le autres jours de l'année</p>
                      </div>

                  </div>

              </div>
          </div>
        </div>
    )
}