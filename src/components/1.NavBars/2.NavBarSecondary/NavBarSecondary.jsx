import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../ThemeContext";
import "./NavBarSecondary.css";

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
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  const toggleWidgets = () => {
    setShowWidgets(prevState => !prevState);
  };

  const handleWidgetClick = (widgetType) => {
    setOpenWidgets(prevWidgets => [
      ...prevWidgets,
      { type: widgetType, x: 100, y: 100, width: 200, height: 300 }
    ]);
  };

  const handleMouseDown = (event, index) => {
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

  return (
    <nav className={`${theme} NavBarSecondary`} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
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

      {/* Affichage des widgets ouverts */}
      {openWidgets.map((widget, index) => (
        <div
          key={index}
          className="DraggableWidget"
          style={{ top: `${widget.y}px`, left: `${widget.x}px`, width: `${widget.width}px`, height: `${widget.height}px` }}
          onMouseDown={(e) => handleMouseDown(e, index)}
        >
          <div className="WidgetHeader">
            <h3>{widget.type}</h3>
            <button className="CloseButton" onClick={() => closeWidget(index)}>X</button>
          </div>
          <div
            className="ResizeHandle"
            onMouseDown={(e) => handleResizeMouseDown(e, index)}
          />
        </div>
      ))}
    </nav>
  );
};

export default NavBarSecondary;
