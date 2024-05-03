import "./NavBar.css"


export default function NavBar({handleTheme}){


    return(
        <nav class="NavBar">
          <ul class="LeftSide">
              <a href="#" className={`logo`}/>
                <li class="Skills"><a href="#">Enseignements par Niveaux</a>
                    <ul class="SkillsDropDown">
                        <li><a href="#">Sixieme</a></li>
                        <li><a href="#">Cinquiete</a></li>
                        <li><a href="#">Quatrieme</a></li>
                        <li><a href="#">Troisieme</a></li>
                        <li><a href="#">Seconde</a></li>
                        <li><a href="#">Premiere</a></li>
                        <li><a href="#">Terminale</a></li>
                    </ul>
                </li>
                <li class="Subjects"><a href="#">Enseignements par Disciplines</a>
                    <ul class="SubjectsDropDown">
                        <li><a href="#">Français</a></li>
                        <li><a href="#">Anglais</a></li>
                        <li><a href="#">Maths</a></li>
                    </ul>
                </li>
                <li class="UniversityCourses"><a href="#">Cursus Universitaires</a>
                    <ul class="UniversityCoursesDropDown">
                        <li><a href="#">Developpement Web</a></li>
                        <li><a href="#">Comptabilité et Gestion</a></li>
                    </ul>
                </li>
          </ul>

          <ul class="RightSide">
            {/* ========================================================= */}
            <label class="DarkLightThemeToggle">
                <input type="checkbox"/>
                <span class="DarkLightThemeSlider"></span>
            </label>
            {/* ========================================================= */}
            <li><a href="#">Tutos</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Compte</a></li>
          </ul>
      </nav>
      
    )
}