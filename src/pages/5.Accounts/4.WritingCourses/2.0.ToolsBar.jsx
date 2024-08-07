import React, { useState } from "react";

const handleTextFormatting = (command, value = null) => {
    const selectedText = window.getSelection();
    if (!selectedText.rangeCount) return;

    const range = selectedText.getRangeAt(0);
    const span = document.createElement("span");

    switch (command) {
        case "bold":
            span.style.fontWeight = "bold";
            break;
        case "italic":
            span.style.fontStyle = "italic";
            break;
        case "underline":
            span.style.textDecoration = "underline";
            break;
        case "foreColor":
            span.style.color = value;
            break;
        case "backColor":
            span.style.backgroundColor = value;
            break;
        default:
            break;
    }

    range.surroundContents(span);
};

const HomeMenu = ({ addNewTab }) => {
    const [color, setColor] = useState("#ff0000"); // Couleur par défaut : rouge

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const applyCurrentColor = () => {
        handleTextFormatting("foreColor", color);
    };

    return (
        <div className="HomeMenu">
            <div className="Left">
                <label className="New" onClick={addNewTab}>
                    <img src="../../../../../../public/file-solid.svg" alt="newFile" />
                </label>

                <label className="Open">
                    <img src="../../../../../../public/openFile.jpg" alt="open file" />
                </label>

                <label className="ClipBoard">
                    <img src="../../../../../../public/clipboard.jpg" alt="clipboard" />
                </label>
            </div>
            <div className="Right">
                <label className="Save">
                    <img src="../../../../../../public/save.jpg" alt="save" />
                </label>

                <label className="SaveAs">
                    <img src="../../../../../../public/saveAs.jpg" alt="saveAs" />
                </label>

                <label className="FormatPainter">
                    <img src="../../../../../../public/formatPainter.jpg" alt="formatPainter" />
                </label>
            </div>
            <div className="TextFormatToolbar">
                <button onClick={() => handleTextFormatting("bold")}>B</button>
                <button onClick={() => handleTextFormatting("italic")}>I</button>
                <button onClick={() => handleTextFormatting("underline")}>U</button>
                <button onClick={() => handleTextFormatting("backColor", "yellow")}>Surligner</button>
                <button onClick={() => handleTextFormatting("subscript")}>Indice</button>
                <button onClick={() => handleTextFormatting("superscript")}>Exposant</button>
                <div className="ColorPicker">
                    <button onClick={applyCurrentColor} className="ApplyColorButton">Appliquer Couleur</button>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="ColorPickerDropdown"
                    />
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
