import { useContext } from "react";
import "./NavBarSecondary.css";
import { ThemeContext } from "../../ThemeContext";

export default function NavBarSecondary() {
    const theme = useContext(ThemeContext);
  return (
    <nav className={`${theme} NavBarSecondary`}>
        <div className={`LeftSide`}>
            <ul>
                <li><a href="#" style={{ color: '#555555' }}>Sixieme</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Cinquieme</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Quatrieme</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Troisieme</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Seconde</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Premiere</a></li>
                <li><a href="#" style={{ color: '#555555' }}>Terminale</a></li>
            </ul>
        </div>
        <div className={`RightSide`}>
            <ul>
                <li><i><a href="#" style={{ color: '#555555' }}>Epingles</a></i></li>
                <li><i><a href="#" style={{ color: '#555555' }}>Utilisateur</a></i></li>
            </ul>
        </div>
    </nav>
  );
}