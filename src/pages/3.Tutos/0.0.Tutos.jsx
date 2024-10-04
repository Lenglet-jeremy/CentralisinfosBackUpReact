
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
                <h1>Les tutoriels</h1>
                    <div className='CoursesArea'>
                        <div className="Sommary">
                            <NavLink to={"/Tutos/WebDev"} >Developpement web</NavLink>
                            <NavLink to={"/Tutos/OpenPyXl"} >Faire mumuse avec OpenPyXl ! </NavLink>
                        </div>
                        <div className='BodyCourses'>
                            <p>Bonjour à tous ! Vous trouverez ici l'ensembles des tutos du site</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}