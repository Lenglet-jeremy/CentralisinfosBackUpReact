import React, { useState } from "react";
import "./CalendarWidget.css";

const numberDays = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
const weekDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
const months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()
const currentDay = new Date().getDay()

const CalendarWidget = () => {

  const [navigateNumberMonths, setNavigateNumberMonths] = useState(0)
  const selectedMonth = months[(currentMonth + navigateNumberMonths + 12) % 12];

  const incrementMonth = () => {
    setNavigateNumberMonths(navigateNumberMonths + 1)

  }

  const decrementMonth = () => {
    setNavigateNumberMonths(navigateNumberMonths - 1)
  }

  const stringDay = (year = new Date().getFullYear(), month = 1, day = 1) => {
    
    const invalid31DayMonths = [4, 6, 9, 11]; // Avril, Juin, Septembre, Novembre
    
    if (day === 31 && invalid31DayMonths.includes(month)) {
        console.log("Date invalide : 31 dans un mois avec seulement 30 jours");
        return; 
    }

    let date = new Date(year, month - 1, day); 
    const weekDays = ["", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    let dayOfWeek = date.getDay();
    
    dayOfWeek = (dayOfWeek + 6) % 7 + 1;
    
    
    return weekDays[dayOfWeek];
}
  
  return (
  <div className="CalendarWidget">
    <div className="DateSelection">
      <button className="Previous"
              onClick={() => decrementMonth()}
      > 
      {"<"}
      </button>

        {selectedMonth}
      
      <button className="Next"
              onClick={() => incrementMonth()}
      > 
      {">"} 
      </button>
    
    </div>
    <div className="DaysRow">
      {numberDays.map((numberDay) => (
        <button className="DayCard" key={numberDay}>
          <p>{numberDay}</p>
          <p>{stringDay(currentYear, currentMonth + navigateNumberMonths, numberDay)}</p>
        </button>
      ))}          
    </div>
    

  </div>
  );
  
};

export default CalendarWidget;
