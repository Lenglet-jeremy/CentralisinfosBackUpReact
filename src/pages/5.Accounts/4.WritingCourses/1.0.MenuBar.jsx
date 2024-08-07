import React from "react";

export default function MenuBar({ handleMenuClick }) {
    return (
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
    );
}


