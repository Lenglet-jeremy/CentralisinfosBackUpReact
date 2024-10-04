import React, { useContext, useState } from "react";

import NavBarPrimary from "../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";
import { ThemeContext } from "../../../ThemeContext";

import MenuBar from "./1.0.MenuBar";
import ToolsBar from "./2.0.ToolsBar";
import TabsBar from "./3.0.TabArea";
import ContentArea from "./4.0.ContentArea";
import StatusBar from "./5.0.StatusBar";

import { ContentContext } from "../../../ContentContext";

import "./0.0.WritingCourses.css";

export default function WritingCourses() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { setContent } = useContext(ContentContext);

    const [selectedMenu, setSelectedMenu] = useState("Accueil");
    const [tabs, setTabs] = useState([{ id: 1, title: "Page 1", content: "" }]);
    const [activeTab, setActiveTab] = useState(1);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    // Ajoute une nouvel page
    const addNewTab = () => {
        const newTab = { id: Date.now(), title: `Page ${tabs.length + 1}`, content: "" };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
    };

    //Affiche le contenu de la page sélectionné
    const handleContentChange = (content, tabId) => {
        const updatedTabs = tabs.map((tab) => {
            if (tab.id === tabId) {
                return { ...tab, content: content };
            }
            return tab;
        });
        setTabs(updatedTabs);
        setContent(content);
    };

    return (
        <div className="WritingCoursesPage">
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} WritingCoursesBody`}>
                <MenuBar handleMenuClick={handleMenuClick} />
                <ToolsBar selectedMenu={selectedMenu} addNewTab={addNewTab} />
                <TabsBar
                    tabs={tabs}
                    activeTab={activeTab}
                    handleTabClick={(tabId) => setActiveTab(tabId)}
                    closeTab={(tabId) => setTabs(tabs.filter(tab => tab.id !== tabId))}
                />
                <ContentArea tabs={tabs} activeTab={activeTab} handleContentChange={handleContentChange} />
                <StatusBar />
            </div>
        </div>
    );
}
