import "./NavBarPrimary.css";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

export default function NavBar({ handleTheme }) {
  const theme = useContext(ThemeContext);

    return(
        <nav className={`${theme} NavBarPrimary`}>
          <ul className={"LeftSide"}>
              <a href="#" className={`Logo`}/>
                <li className={"Subjects"}><a href="#">Disciplines</a>
                    <ul className={"SubjectsDropDown"}>
                        <li><a href="#">Français</a></li>
                        <li><a href="#">Anglais</a></li>
                        <li><a href="#">Maths</a></li>
                    </ul>
                </li>
                <li className={"UniversityCourses"}><a href="#">Cursus Universitaires</a>
                    <ul className={"UniversityCoursesDropDown"}>
                        <li><a href="#">Developpement Web</a></li>
                        <li><a href="#">Comptabilité et Gestion</a></li>
                    </ul>
                </li>
                <label className={"DarkLightThemeToggle"}>
                    <input type="checkbox" onChange={handleTheme} />
                    <span className={"DarkLightThemeSlider"}></span>
                </label>
          </ul>

          <label className={"SearchBar"}>
            <img src="../../../../searchIcon.svg" alt="" />
            <input placeholder="Recherche"/>
          </label>

          <ul className={"RightSide"}>
            <a href="#" className={"Gift"}>
                <img src='../../../../heart.png' alt="Coeur" />
                Un petit don ?
            </a>
            <li><a href="#">Tutos</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Compte</a></li>
          </ul>
      </nav>
    )
}