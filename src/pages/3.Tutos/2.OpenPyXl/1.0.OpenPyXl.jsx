import { useState } from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { NavLink } from "react-router-dom";
import "./1.0.OpenPyXl.css"

export default function OpenPyXl() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }

      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div>
        <NavBarPrimary handleTheme={handleTheme} />
        <NavBarSecondary />
        <div className={`${bodyTheme} Body`}>
          <div className="Title">
            <h1>OpenPyXl</h1>
          </div>
                  <div className='CoursesArea'>
                      <div className="Sommary">
                          <NavLink to={"/Tutos/WebDev"} >Instalation de l'environnement de developpement</NavLink>
                      </div>
                      <div className='BodyCourses'>
                          <p>Bonjour à tous ! Dans le cours qui suis nous allons apprendre à créer le fichier Excel qui suis : </p>
                          <iframe src="https://onedrive.live.com/embed?resid=F7CF7201558D3C58%211180&authkey=!ANarTfY9xSHXBCw&em=2" width="402" height="346" frameborder="0" scrolling="no"></iframe>
                      </div>
                  </div>
          </div>
        </div>
    )
}