import { useState } from "react";
import NavBarPrimary from "../../../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../../components/2.NavBarSecondary/NavBarSecondary";

export default function OpenPyXl() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div>
        <NavBarPrimary handleTheme={handleTheme} />
        <NavBarSecondary />
            <h1>OpenPyXl</h1>
        </div>
    )
}