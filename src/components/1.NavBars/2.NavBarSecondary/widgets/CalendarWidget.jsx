import React from "react";
import "./CalendarWidget.css";

const CalendarWidget = () => (
  <div className="CalendarWidget">
    <table>
      <thead>
        <tr className="DaysRow">
          <p>Lun</p>
          <p>Mar</p>
          <p>Mer</p>
          <p>Jeu</p>
          <p>Ven</p>
          <p>Sam</p>
          <p>Dim</p>
        </tr>
      </thead>
      <tbody>
        {/* Ajouter les jours ici */}
      </tbody>
    </table>
  </div>
);

export default CalendarWidget;
