import NavBarPrimary from "../../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/2.NavBarSecondary/NavBarSecondary";
import Register from "./1.Register/1.0.Register";
import Login from "./2.Login/1.0.Login";
import "./0.1.Account.css";
import { useState } from "react";

export default function Account() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className={`${bodyTheme} AccountPage`}>
            <div className="AccountNavBars">
                <NavBarPrimary handleTheme={handleTheme} />
                <NavBarSecondary />
            </div>
            <div className="AccountBody">
                <Register />
                <Login />
            </div>
            {/* Redéfinir le CSS de Register et Login de sorte à les faire apparaitre sur une seule page */}
            {/* Pour fix les erreurs : Error fetching data:  SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
            Ré-adapter les POST envoyé par register et Login et adapter les POST de server.js */}
        </div>
    )
}