import React from "react";
import "./CalendarWidget.css";

const CalendarWidget = () => (
  <div className="calendar-widget">
    <table>
      <thead>
        <tr className="days-row">
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {/* Ajouter les jours ici */}
      </tbody>
    </table>
  </div>
);

export default CalendarWidget;
