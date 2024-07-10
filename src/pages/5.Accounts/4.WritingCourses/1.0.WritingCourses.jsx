import { useContext } from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { ThemeContext } from "../../../ThemeContext";
import { NavLink } from "react-router-dom";
import "./1.0.WritingCourses.css";

export default function WritingCourses() {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div className="WritingCoursesPage">
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} WritingCoursesBody`}>
                <div className="MenuBar">
                    
                    <div className="Left">
                        <ul>
                            <button className="MenusResponsive">Menus</button>
                            <button>Fichier</button>
                            <button>Accueil</button>
                            <button>Inserion</button>
                            <button>Dessin</button>
                            <button>Conception</button>
                            <button>Mise en page</button>
                            <button>Référence</button>
                            <button>Revision</button>
                            <button>Affichage</button>
                            <button>Aide</button>
                            <div className="ContextMenus">
                                <button style={{ color: '#555555' }}>Menu contextuelle 1</button>
                                <button style={{ color: '#555555' }}>Menu contextuelle 2</button>
                                <button style={{ color: '#555555' }}>Menu contextuelle 3</button>
                            </div>
                        </ul>
                    </div>

                    <div className="Right">
                        <ul>
                            <button to={"#"}>Publier</button>
                        </ul>
                    </div>

                </div>
                <div className="ContentArea">
                    <div className="Content">
                        <p>Hello world ! </p>
                    </div>
                </div>

            </div>
        </div>
    )
}