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
        const range = document.createRange(); 
        const selection = window.getSelection();
        range.selectNodeContents(element); // Sélectionne le contenu complet de l'élément
        range.collapse(false); 
        selection.removeAllRanges(); 
        selection.addRange(range); 
        element.focus(); 
    };

    return (
        <div className="ContentArea">
            <div className="Content">
                <div
                    contentEditable 
                    suppressContentEditableWarning={true} 
                    ref={contentRef} 
                    onInput={() => handleContentChange(contentRef.current.innerHTML, activeTab)} 
                    className="EditableContent"
                />
            </div>
        </div>
    );
}
