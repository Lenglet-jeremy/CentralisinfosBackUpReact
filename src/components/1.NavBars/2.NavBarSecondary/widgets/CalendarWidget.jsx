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

  const stringYear = (year = currentYear, month = 0, day = 0) => {

  }

  const stringMonth = (year = currentYear, month = 0, day = 0) => {

  }

  const stringDay = (year = currentYear, month = 0, day = 0) => {
    let date = new Date(year, month, day);

    let dayOfWeek = date.getDay();
    dayOfWeek = (dayOfWeek + 6) % 7;
    
    return weekDays[dayOfWeek];
}


  const stringDate = (year = currentYear, month = 0, day = 0) => {

  }

  const numberYear = (date) => {

  }

  const numberMonth = (date) => {

  }

  const numberDay = (date) => {

  }

  const numberDate = () => {

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
