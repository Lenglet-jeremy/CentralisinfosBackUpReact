import React, { useEffect, useRef, useState } from "react";
import "./3.0.TabArea.css";

export default function TabsBar({
    tabs,             
    activeTab,        
    handleTabClick,   
    closeTab          
}) {
    const [editingTabId, setEditingTabId] = useState(null);
    const [newTabTitle, setNewTabTitle] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (editingTabId && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editingTabId]);


    const handleTitleChange = (e) => {
        setNewTabTitle(e.target.value);
    };

    // Fonction pour gérer le blur (perte de focus) ou la pression de la touche "Enter"
    // Applique le nouveau titre à l'onglet et réinitialise les états
    const handleBlurOrEnter = (tabId) => {
        if (newTabTitle.trim() !== "") {
            // Trouve l'onglet en cours de modification et met à jour son titre
            const tabToEdit = tabs.find(tab => tab.id === tabId);
            tabToEdit.title = newTabTitle;
        }
        // Réinitialise les états après la modification
        setEditingTabId(null);
        setNewTabTitle("");
    };

    const handleDoubleClick = (tabId, tabTitle) => {
        setEditingTabId(tabId);
        setNewTabTitle(tabTitle);
    };

    return (
        <div className="TabBar">
            {tabs.map((tab) => (
                <div 
                    key={tab.id} 
                    className={`Tab ${activeTab === tab.id ? 'active' : ''}`} 
                    onClick={() => handleTabClick(tab.id)}
                >
                    {editingTabId === tab.id ? (
                        // Si l'onglet est en cours d'édition, affiche un champ de saisie
                        <input
                            type="text"
                            value={newTabTitle}
                            onChange={handleTitleChange}   // Gère les changements de texte
                            onBlur={() => handleBlurOrEnter(tab.id)} // Gère la perte de focus
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleBlurOrEnter(tab.id); // Gère la pression de la touche "Enter"
                            }}
                            ref={inputRef} // Associe la référence pour gérer le focus
                            className="editingInput"
                        />
                    ) : (
                        // Sinon, affiche simplement le titre de l'onglet
                        <span onDoubleClick={() => handleDoubleClick(tab.id, tab.title)}>
                            {tab.title}
                        </span>
                    )}
                    <button onClick={(e) => {
                        e.stopPropagation(); // Empêche l'événement onClick de se propager lors de la fermeture d'un onglet
                        closeTab(tab.id);    // Gère la fermeture de l'onglet
                    }}>X</button>
                </div>
            ))}
        </div>
    );
}
