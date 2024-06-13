import { useState } from 'react';
import './App.css';
import { ThemeContext } from "./ThemeContext";
import { Outlet } from "react-router-dom";


function App() {
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;