import React, { useState } from "react";
import "./2.0.ToolsBar.css"

const handleTextFormatting = (command, value = null) => {
    const selectedText = window.getSelection();
    if (!selectedText.rangeCount) return;

    const range = selectedText.getRangeAt(0);

    if (command === "bulletList") {
        // Créer un div pour encapsuler chaque puce et son texte avec une indentation
        const bulletContainer = document.createElement("div");
        bulletContainer.style.marginLeft = "20px";

        // Créer un élément <span> pour la puce
        const bullet = document.createElement("span");
        bullet.textContent = "•\t";
        bullet.style.marginRight = "8px"; 
        
        // Extraire le texte sélectionné
        const textNode = document.createTextNode(selectedText.toString());

        // Effacer le contenu actuel et insérer la nouvelle puce avec l'indentation
        range.deleteContents();
        bulletContainer.appendChild(bullet);
        bulletContainer.appendChild(textNode);
        range.insertNode(bulletContainer);

        // Positionner le curseur après le texte inséré
        range.setStartAfter(bulletContainer);
        range.collapse(false);

        // Supprimer toute sélection active
        selectedText.removeAllRanges();
        selectedText.addRange(range);
    } else {
        // Utiliser execCommand pour les autres commandes de formatage de texte
        document.execCommand(command, false, value);
    }
};





const HomeMenu = ({ addNewTab }) => {
    const [color, setColor] = useState("#ff0000"); // Couleur par défaut : rouge
    const [isBoldActive, setIsBoldActive] = useState(false);
    const [isItalicActive, setIsItalicActive] = useState(false);
    const [isUnderlineActive, setIsUnderlineActive] = useState(false);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const applyCurrentColor = () => {
        handleTextFormatting("foreColor", color);
    };

    const toggleBold = () => {
        handleTextFormatting("bold");
        setIsBoldActive(!isBoldActive);
    };

    const toggleItalic = () => {
        handleTextFormatting("italic");
        setIsItalicActive(!isItalicActive);
    };

    const toggleUnderline = () => {
        handleTextFormatting("underline");
        setIsUnderlineActive(!isUnderlineActive);
    };

    return (
        <div className="HomeMenu">
            <div className="Left">
                <label className="New" onClick={addNewTab}>
                    <img src="/file-solid.svg" alt="newFile" />
                </label>
                <label className="Open">
                    <img src="/openFile.jpg" alt="open file" />
                </label>
                <label className="ClipBoard">
                    <img src="/clipboard.jpg" alt="clipboard" />
                </label>
            </div>
            <div className="Right">
                <label className="Save">
                    <img src="/save.jpg" alt="save" />
                </label>
                <label className="SaveAs">
                    <img src="/saveAs.jpg" alt="saveAs" />
                </label>
                <label className="FormatPainter">
                    <img src="/formatPainter.jpg" alt="formatPainter" />
                </label>
            </div>
            <div className="TextFormatToolbar">
                <button
                    onClick={toggleBold}
                    className={isBoldActive ? "active" : ""}
                >
                    B
                </button>
                <button
                    onClick={toggleItalic}
                    className={isItalicActive ? "active" : ""}
                >
                    I
                </button>
                <button
                    onClick={toggleUnderline}
                    className={isUnderlineActive ? "active" : ""}
                >
                    U
                </button>
                <button onClick={() => handleTextFormatting("bulletList")}>•</button>
                <div className="ColorPicker">
                    <div className="Color">
                        <button onClick={applyCurrentColor} className="ApplyColorButton">Couleur</button>
                        <div className="CurrentColorIndicator" style={{ backgroundColor: color }} />
                    </div>
                    <label>
                        <input
                            type="color"
                            value={color}
                            onChange={handleColorChange}
                            className="ColorPickerDropdown"
                        />
                        <p>v</p>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default function ToolsBar({ selectedMenu, addNewTab }) {
    const renderToolsBarContent = () => {
        switch (selectedMenu) {
            case "Accueil":
                return <HomeMenu addNewTab={addNewTab} />;
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

    return <div className="ToolsBar">{renderToolsBarContent()}</div>;
}
