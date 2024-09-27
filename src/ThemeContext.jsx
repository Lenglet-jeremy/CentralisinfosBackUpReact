import { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("LightTheme");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "DarkTheme" ? "LightTheme" : "DarkTheme"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
