import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext"; // Importation du contexte du thème
import "./NavBarSecondary.css";
import CalendarWidget from "./widgets/CalendarWidget";
import TodoListWidget from "./widgets/TodoListWidget";
import NoteWidget from "./widgets/NoteWidget";

const NavBarSecondary = () => {
  const navigate = useNavigate(); 
  const { theme } = useContext(ThemeContext); 

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [showWidgets, setShowWidgets] = useState(false); 
  const [openWidgets, setOpenWidgets] = useState([]); 

  const [draggingIndex, setDraggingIndex] = useState(null); 
  const [resizingIndex, setResizingIndex] = useState(null); 

  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  useEffect(() => {

    if (draggingIndex !== null || resizingIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      document.body.classList.add("no-select"); 
    } 

    else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("no-select"); 
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("no-select");
    };
  }, [draggingIndex, resizingIndex]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleWidgets = () => {
    setShowWidgets(prevState => !prevState);
  };

  const handleWidgetClick = (widgetType) => {
    setOpenWidgets(Widgets => [
      ...Widgets,
      { type: widgetType, x: 0, y: 42, width: 300, height: 350 }
    ]);
  };

  const handleMouseLeftClick = (event, index) => {
    setDraggingIndex(index);
    setDragOffset({
      x: event.clientX - openWidgets[index].x,
      y: event.clientY - openWidgets[index].y
    });
  };

  const handleMouseMove = (event) => {
    if (draggingIndex !== null) {
      const newWidgets = [...openWidgets];
      newWidgets[draggingIndex] = {
        ...newWidgets[draggingIndex],
        x: event.clientX - dragOffset.x,
        y: event.clientY - dragOffset.y,
      };
      setOpenWidgets(newWidgets);
    } else if (resizingIndex !== null) {
      const newWidgets = [...openWidgets];
      newWidgets[resizingIndex] = {
        ...newWidgets[resizingIndex],
        width: resizeStart.width + (event.clientX - resizeStart.startX),
        height: resizeStart.height + (event.clientY - resizeStart.startY),
      };
      setOpenWidgets(newWidgets);
    }
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
    setResizingIndex(null);
  };

  const handleResizeMouseDown = (event, index) => {
    event.stopPropagation();
    setResizingIndex(index);
    setResizeStart({
      startX: event.clientX,
      startY: event.clientY,
      width: openWidgets[index].width,
      height: openWidgets[index].height,
    });
  };

  const closeWidget = (index) => {
    setOpenWidgets(prevWidgets => prevWidgets.filter((_, i) => i !== index));
  };

  const renderWidgetContent = (widgetType) => {
    switch (widgetType) {
      case "Calendrier":
        return <CalendarWidget />;
      case "TodoList":
        return <TodoListWidget />;
      case "BlocNote":
        return <NoteWidget />;
      default:
        return null;
    }
  };

  return (
    <nav className={`${theme} NavBarSecondary`} onMouseUp={handleMouseUp}>
      <div className="LeftSide">
        <ul>
          <NavLink to="/skills" className="Niveaux">Niveaux</NavLink>
          <NavLink to="/sixieme"className={"NavLink"}>Sixieme</NavLink>
          <li><a href="#" className="NavLink">Cinquieme</a></li>
          <li><a href="#" className="NavLink">Quatrieme</a></li>
          <li><a href="#" className="NavLink">Troisieme</a></li>
          <li><a href="#" className="NavLink">Seconde</a></li>
          <li><a href="#" className="NavLink">Premiere</a></li>
          <li><a href="#" className="NavLink">Terminale</a></li>
        </ul>
      </div>

      <div className="Center">
        <button onClick={toggleWidgets}>Widgets</button>
        {showWidgets && (

          // Paramettre les widgets à ouvrir
          <div className="WidgetsDropdown">
            <button onClick={() => handleWidgetClick("Calendrier")}>Calendrier</button>
            <button onClick={() => handleWidgetClick("BlocNote")}>Bloc-Note</button>
            <button onClick={() => handleWidgetClick("TodoList")}>To-Do List</button>
          </div>
        )}
      </div>

      <div className="RightSide">
        <ul>
          <li className="EpinglesResponsive">Epingles</li>
            <li><a href="#" className="NavLink">Epingle 1</a></li>
            <li><a href="#" className="NavLink">Epingle 2</a></li>
            <li><a href="#" className="NavLink">Epingle 3</a></li>
            <li><a href="#" className="NavLink">Epingle 4</a></li>
            <li><a href="#" className="NavLink">Epingle 5</a></li>
          {isAuthenticated && (
            <li><a href="#" className="NavLink" onClick={handleLogout}>Déconnexion</a></li>
          )}
        </ul>
      </div>


      {/* Affiche les widgets ouverts */}
    
      {openWidgets.map((widget, index) => (
        // Affichage du Widget
        <div key={index}
             className="DragableWidget"
             style={{ top: `${widget.y}px`, left: `${widget.x}px`, 
             width: `${widget.width}px`, height: `${widget.height}px` }}>

          <div className="WidgetHeader"
               onMouseDown={(e) => handleMouseLeftClick(e, index)}>

            <h3>{widget.type}</h3>
            <button className="CloseButton" onClick={() => closeWidget(index)}>X</button>

          </div>

          {/* Rendu du contenu de la Widget */}
          <div className="WidgetContent">
            {renderWidgetContent(widget.type)}
          </div>

          {/* Rend le widget redimentionnable */}
          <div className="ResizeHandle"
               onMouseDown={(e) => handleResizeMouseDown(e, index)}
          />
        </div>
      ))}

    </nav>
  );
};

export default NavBarSecondary;
