export default function TabsBar({
    tabs,
    activeTab,
    editingTabId,
    newTabTitle,
    handleTitleChange,
    handleBlurOrEnter,
    handleDoubleClick,
    handleTabClick,  // Assurez-vous que cette fonction est bien passée en prop
    closeTab,
    inputRef
}) {
    return (
        <div className="TabBar">
            {tabs.map((tab) => (
                <div 
                    key={tab.id} 
                    className={`Tab ${activeTab === tab.id ? 'active' : ''}`} 
                    onClick={() => handleTabClick(tab.id)}  // Ajoutez cet événement onClick
                >
                    {editingTabId === tab.id ? (
                        <input
                            type="text"
                            value={newTabTitle}
                            onChange={handleTitleChange}
                            onBlur={() => handleBlurOrEnter(tab.id)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleBlurOrEnter(tab.id);
                            }}
                            ref={inputRef}
                            className="editingInput"
                        />
                    ) : (
                        <span onDoubleClick={() => handleDoubleClick(tab.id, tab.title)}>
                            {tab.title}
                        </span>
                    )}
                    <button onClick={(e) => {
                        e.stopPropagation(); // Empêche l'événement onClick de se propager lors de la fermeture d'un onglet
                        closeTab(tab.id);
                    }}>X</button>
                </div>
            ))}
        </div>
    );
}


