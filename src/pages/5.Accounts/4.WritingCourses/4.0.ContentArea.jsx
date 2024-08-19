import React, { useEffect, useRef } from "react";
import "./4.0.ContentArea.css";

export default function ContentArea({ tabs, activeTab, handleContentChange }) {
    // Référence pour l'élément éditable
    const contentRef = useRef(null);

    useEffect(() => {
        const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content || "";
        
        if (contentRef.current) {
            contentRef.current.innerHTML = activeTabContent;
            moveCaretToEnd(contentRef.current);
        }
    }, [activeTab, tabs]); 

    // Fonction pour déplacer le curseur à la fin du contenu de l'élément éditable
    const moveCaretToEnd = (element) => {
        const range = document.createRange(); // Crée une nouvelle plage de sélection
        const selection = window.getSelection(); // Récupère la sélection courante de l'utilisateur
        range.selectNodeContents(element); // Sélectionne le contenu complet de l'élément
        range.collapse(false); // Déplace le curseur à la fin
        selection.removeAllRanges(); // Supprime toutes les sélections existantes
        selection.addRange(range); // Applique la nouvelle sélection
        element.focus(); // Donne le focus à l'élément
    };

    return (
        <div className="ContentArea">
            <div className="Content">
                <div
                    contentEditable // Rend le div éditable par l'utilisateur
                    suppressContentEditableWarning={true} // Supprime les avertissements React sur l'édition du contenu
                    ref={contentRef} // Associe l'élément à la référence
                    onInput={() => handleContentChange(contentRef.current.innerHTML, activeTab)} 
                    // Appelle handleContentChange avec le contenu actuel et l'onglet actif lors de chaque modification
                    className="EditableContent" // Classe CSS pour styliser le contenu
                />
            </div>
        </div>
    );
}
