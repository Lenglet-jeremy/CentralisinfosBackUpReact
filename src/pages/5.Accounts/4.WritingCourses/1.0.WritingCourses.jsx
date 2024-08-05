import { useContext, useState } from "react";
import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { ThemeContext } from "../../../ThemeContext";

import "./1.0.WritingCourses.css";
import "./2.0.MenuBar.css"
import "./2.1.ToolsBar.css"
import "./3.0.ContentArea.css"
import "./4.0.StatusBar.css"

export default function WritingCourses() {
    
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [selectedMenu, setSelectedMenu] = useState("Accueil"); 

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };


    function HomeMenu(){
        return(
            <div className="HomeMenu">
                <div className="Left">
                    <label className="New">
                        {/* <img src="" alt="" /> */}
                        <p>Nouveau</p>
                    </label>
                    
                    <label className="Open">
                        {/* <img src="" alt="" /> */}
                        <p>Ouvrir</p>
                    </label>
                    
                    <label className="ClipBoard">
                        {/* <img src="" alt="" /> */}
                        <p>Presse-Papier</p>
                    </label>
                </div>
                <div className="Right">
                    <label className="Save">
                        {/* <img src="" alt="" /> */}
                        <p>Enregistrer</p>
                    </label>
                    
                    <label className="SaveAs">
                        {/* <img src="" alt="" /> */}
                        <p>Enregistrer sous</p>
                    </label>
                    
                    <label className="FormatPainter">
                        {/* <img src="" alt="" /> */}
                        <p>Reproduire la mise en forme</p>
                    </label>
                </div>
        </div>
    )
    }

    const renderToolsBarContent = () => {
        switch (selectedMenu) {
            case "Accueil":
                return HomeMenu();
            case "Insertion":
                return <p>Contenu du menu Insertion</p>;
            case "Dessin":
                return <p>Contenu du menu Dessin</p>;
            case "Conception":
                return <p>Contenu du menu Conception</p>;
            case "Mise en page":
                return <p>Contenu du menu Mise en page</p>;
            case "Référence":
                return <p>Contenu du menu Référence</p>;
            case "Révision":
                return <p>Contenu du menu Révision</p>;
            case "Affichage":
                return <p>Contenu du menu Affichage</p>;
            case "Aide":
                return <p>Contenu du menu Aide</p>;
            default:
                return <p>Contenu par défaut</p>;
        }
    };

    return (
        <div className="WritingCoursesPage">
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} WritingCoursesBody`}>
                <div className="MenuBar">
                    <div className="Left">
                        <ul>
                            <button className="MenusResponsive">Menus</button>
                            <button onClick={() => handleMenuClick("Fichier")}>Fichier</button>
                            <button onClick={() => handleMenuClick("Accueil")}>Accueil</button>
                            <button onClick={() => handleMenuClick("Insertion")}>Insertion</button>
                            <button onClick={() => handleMenuClick("Dessin")}>Dessin</button>
                            <button onClick={() => handleMenuClick("Conception")}>Conception</button>
                            <button onClick={() => handleMenuClick("Mise en page")}>Mise en page</button>
                            <button onClick={() => handleMenuClick("Référence")}>Référence</button>
                            <button onClick={() => handleMenuClick("Révision")}>Révision</button>
                            <button onClick={() => handleMenuClick("Affichage")}>Affichage</button>
                            <button onClick={() => handleMenuClick("Aide")}>Aide</button>
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
                <div className="ToolsBar">
                    {renderToolsBarContent()} {/* Afficher le contenu de la ToolsBar */}
                </div>

                <div className="ContentArea">
                    <div className="Content">
                        <input type="text" />
                    </div>
                </div>

                <div className="StatusBar">
                    <div className="Left">
                        <p>Page X sur X</p>
                        <p>X mots </p>
                        <p>Langue : Français</p>
                        <p>Autocompletion : Activé</p>
                        <p>Macros</p>
                        <p>Accessibilité</p>
                    </div>
                    <div className="Center">

                    </div>
                    <div className="Right">
                        <p>ModeAffichage1</p>
                        <p>ModeAffichage2</p>
                        <p>ModeAffichage3</p>
                        <p>ZoomSlider</p>
                        <p>Zoom%</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
