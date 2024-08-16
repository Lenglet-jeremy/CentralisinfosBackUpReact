import React from "react";
import "./5.0.StatusBar.css"

export default function StatusBar() {
    return (
        <div className="StatusBar">
            <div className="Left">
                <p>Page X sur X</p>
                <p>X mots </p>
                <p>Langue : Français</p>
                <p>Autocompletion : Activé</p>
                <p>Macros</p>
                <p>Accessibilité</p>
            </div>
            <div className="Center"></div>
            <div className="Right">
                <p>ModeAffichage1</p>
                <p>ModeAffichage2</p>
                <p>ModeAffichage3</p>
                <p>ZoomSlider</p>
                <p>Zoom%</p>
            </div>
        </div>
    );
}


