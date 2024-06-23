import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("DarkTheme");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "DarkTheme" ? "LightTheme" : "DarkTheme"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
