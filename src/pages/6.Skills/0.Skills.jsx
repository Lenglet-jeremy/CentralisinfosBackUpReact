import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import NavBarPrimary from "../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary";

export default function Skills() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return(
        <div>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} Body`}>
                <div></div>
            </div>
        </div>
    )
}