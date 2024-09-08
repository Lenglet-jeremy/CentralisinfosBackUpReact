import React, { useState } from "react";
import "./CalendarWidget.css";

const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
const numberDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", ];

const CalendarWidget = () => {
  const [navigateNumberMonths, setNavigateNumberMonths] = useState(0);
  const [RDV, setRDV] = useState("")

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const selectedMonthIndex = (currentMonth + navigateNumberMonths + 12) % 12;
  const selectedMonthYear = currentYear + Math.floor((currentMonth + navigateNumberMonths) / 12);

  const incrementMonth = () => {
    setNavigateNumberMonths(navigateNumberMonths + 1);
  };

  const decrementMonth = () => {
    setNavigateNumberMonths(navigateNumberMonths - 1);
  };


  const getNumberOfDays = (month, year) => {
    if (month === 1) { // Février
      return year % 4 === 0  ? 29 : 28;
    }

    switch (month) {
      case 3: // Avril
        return 30;

      case 5: // Juin
        return 30;
        
      case 8: // Septembre
        return 30;

      case 10: // Novembre
        return 30;
    
      default:
        return 31;
    }
  };

  const stringDayOfWeek = (year = currentYear, month = 0, day = 0) => {
    const numberOfDays = getNumberOfDays(month, year);
    if (day > numberOfDays) {
      return "";
    }

    const date = new Date(year, month - 1, day);
    const dayOfWeek = (date.getDay() + 6) % 7;

    return weekDays[dayOfWeek];
  };

  const showRDV = () => {
    
    setRDV("TEST")
  };


  return (
    <div className="CalendarWidget">
      <div className="DateSelection">
        <button className="Previous" onClick={decrementMonth}>{"<"}</button>
        {months[selectedMonthIndex]} {selectedMonthYear}
        <button className="Next" onClick={incrementMonth}>{">"}</button>
      </div>
      <div className="DaysRow">
        {numberDays.map((numberDay) => {
          const dayString = stringDayOfWeek(selectedMonthYear, selectedMonthIndex, Number(numberDay));
          if (dayString) {
            return (
              <div>
                <button className="DayCard" key={numberDay}
                        onClick={() => showRDV(numberDay)}>
                  <p>{numberDay}</p>
                  <p>{dayString}</p>
                </button>
              </div>
            )
          }
          else{
            return null
          }
        })}
                {RDV}
      </div>
    </div>
  );
};

export default CalendarWidget;
