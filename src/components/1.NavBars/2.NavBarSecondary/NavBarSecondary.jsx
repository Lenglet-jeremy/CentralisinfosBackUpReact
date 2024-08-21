import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const levels = ["Sixième", "Cinquième", "Quatrième", "Troisième", "Seconde", "Première", "Terminale"];
  const pins = ["Épingle 1", "Épingle 2", "Épingle 3", "Épingle 4", "Épingle 5"];

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token')); // Converti la valeur de la clé "token" en un boolean
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

    // Nettoyage des gestionnaires d'événements lorsqu'on quitte le composant
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("no-select");
    };
  }, [draggingIndex, resizingIndex]);

  const handleLogout = () => {
    // Déconnecte l'utilisateur en supprimant le token et redirige vers la page d'accueil
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleWidgets = () => {
    setShowWidgets(prevState => !prevState);
  };

  const handleWidgetClick = (widgetType) => {
    // Initialise les widgets ouverts
    setOpenWidgets(prevWidgets => [
      ...prevWidgets,
      { type: widgetType, x: 100, y: 100, width: 200, height: 300 }
    ]);
  };

  const handleMouseDown = (event, index) => {
    // Initialise le déplacement d'un widget    
    setDraggingIndex(index);
    setDragOffset({
      x: event.clientX - openWidgets[index].x,
      y: event.clientY - openWidgets[index].y
    });
  };

  const handleMouseMove = (event) => {
    // Gère le déplacement ou le redimensionnement des widgets pendant que la souris bouge
    if (draggingIndex !== null) {
      // Si un widget est en cours de déplacement
      const newWidgets = [...openWidgets];
      newWidgets[draggingIndex] = {
        ...newWidgets[draggingIndex],
        x: event.clientX - dragOffset.x,
        y: event.clientY - dragOffset.y,
      };
      setOpenWidgets(newWidgets);
    } else if (resizingIndex !== null) {
      // Si un widget est en cours de redimensionnement
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
    // Réinitialise les états de déplacement et de redimensionnement
    setDraggingIndex(null);
    setResizingIndex(null);
  };

  const handleResizeMouseDown = (event, index) => {
    // Initialise le redimensionnement d'un widget
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
    // Ferme un widget en le retirant de la liste des widgets ouverts
    setOpenWidgets(prevWidgets => prevWidgets.filter((_, i) => i !== index));
  };

  const renderWidgetContent = (widgetType) => {
    // Retourne le contenu approprié en fonction du type de widget
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
          <li className="NiveauxResponsive">Niveaux</li>
          {levels.map((level, index) => (
            <li key={index}><a href="#" className="NavLink">{level}</a></li>
          ))}
        </ul>
      </div>

      <div className="Center">
        <button onClick={toggleWidgets}>Widgets</button>
        {showWidgets && (

          // Paramettre les widgets à ouvrir
          <div className="WidgetsOverlay">
            <button onClick={() => handleWidgetClick("Calendrier")}>Calendrier</button>
            <button onClick={() => handleWidgetClick("BlocNote")}>Bloc-Note</button>
            <button onClick={() => handleWidgetClick("TodoList")}>To-Do List</button>
          </div>
        )}
      </div>

      <div className="RightSide">
        <ul>
          <li className="EpinglesResponsive">Epingles</li>
          {pins.map((pin, index) => (
            <li key={index}><a href="#" className="NavLink">{pin}</a></li>
          ))}
          {isAuthenticated && (
            <li><a href="#" className="NavLink" onClick={handleLogout}>Déconnexion</a></li>
          )}
        </ul>
      </div>


      {/* Affiche les widgets ouverts */}
      {openWidgets.map((widget, index) => (
        <div
          key={index}
          className="DraggableWidget"
          style={{ top: `${widget.y}px`, left: `${widget.x}px`, width: `${widget.width}px`, height: `${widget.height}px` }}
          onMouseDown={(e) => handleMouseDown(e, index)} // Permet de déplacer le widget
        >
          <div className="WidgetHeader">
            <h3>{widget.type}</h3>
            <button className="CloseButton" onClick={() => closeWidget(index)}>X</button> {/* Bouton pour fermer le widget */}
          </div>

          <div className="WidgetContent">
            {renderWidgetContent(widget.type)} {/* Affiche le contenu du widget */}
          </div>

          <div
            className="ResizeHandle"
            onMouseDown={(e) => handleResizeMouseDown(e, index)} // Permet de redimensionner le widget
          />
        </div>
      ))}
    </nav>
  );
};

export default NavBarSecondary;
