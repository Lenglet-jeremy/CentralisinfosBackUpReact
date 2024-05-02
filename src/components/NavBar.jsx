import "./NavBar.css"

export default function NavBar(){
    return(
        <nav class="NavBarArea">
            <div class="LeftSide">
                <p>LOGO</p>
                <h2>Centralisinfos</h2>
                <ul>
                    <li><a href="#">Enseignements par Discipline</a></li>
                    <li><a href="#">Enseignements par Niveaux</a></li>
                    <li><a href="#">Cursus Universitaires</a></li>
                </ul>
            </div>
            <div class="RightSide">
                <ul>
                    <p>theme toggle</p>
                    <li><a href="#">Tutos</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Compte</a></li>
                </ul>
            </div>
        </nav>
    )
}