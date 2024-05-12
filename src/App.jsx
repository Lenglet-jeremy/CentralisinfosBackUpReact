import { useState } from 'react';
import './App.css';
import NavBarPrimary from './components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from './components/2.NavBarSecondary/NavBarSecondary';
import Body from './components/3.Body/Body';
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBarPrimary handleTheme={handleTheme} />
        <NavBarSecondary />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;