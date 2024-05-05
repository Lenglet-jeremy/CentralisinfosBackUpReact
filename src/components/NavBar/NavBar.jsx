import "./NavBar.css"


export default function NavBar({handleTheme}){


    return(
        <nav className={"NavBar"}>
          <ul className={"LeftSide"}>
              <a href="#" className={`Logo`}/>
                <li className={"Skills"}><a href="#">Enseignements par Niveaux</a>
                    <ul className={"SkillsDropDown"}>
                        <li><a href="#">Sixieme</a></li>
                        <li><a href="#">Cinquiete</a></li>
                        <li><a href="#">Quatrieme</a></li>
                        <li><a href="#">Troisieme</a></li>
                        <li><a href="#">Seconde</a></li>
                        <li><a href="#">Premiere</a></li>
                        <li><a href="#">Terminale</a></li>
                    </ul>
                </li>
                <li className={"Subjects"}><a href="#">Enseignements par Disciplines</a>
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
          </ul>

          <ul className={"RightSide"}>
            <label className={"DarkLightThemeToggle"}>
                <input type="checkbox" onChange={handleTheme} />
                <span className={"DarkLightThemeSlider"}></span>
            </label>
            <li><a href="#">Tutos</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Compte</a></li>
          </ul>
      </nav>
      
    )
}