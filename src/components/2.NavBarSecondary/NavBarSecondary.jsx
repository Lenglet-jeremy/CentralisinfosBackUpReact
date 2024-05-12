import { useContext } from "react";
import "./NavBarSecondary.css";
import { ThemeContext } from "../../ThemeContext";

export default function NavBarSecondary() {
    const theme = useContext(ThemeContext);
  return (
    <nav className={`${theme} NavBarSecondary`}>
        <div className={`LeftSide`}>
            <ul>
                <li><a href="#">Sixieme</a></li>
                <li><a href="#">Cinquieme</a></li>
                <li><a href="#">Quatrieme</a></li>
                <li><a href="#">Troisieme</a></li>
                <li><a href="#">Seconde</a></li>
                <li><a href="#">Premiere</a></li>
                <li><a href="#">Terminale</a></li>
            </ul>
        </div>
        <div className={`RightSide`}>
            <ul>
                <li><a href="#">C++</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">Qt</a></li>
            </ul>
        </div>
    </nav>
  );
}