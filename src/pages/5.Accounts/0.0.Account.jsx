import NavBarPrimary from "../../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/2.NavBarSecondary/NavBarSecondary";
import Register from "./1.Register/1.0.Register";
import Login from "./2.Login/1.0.Login";
import UserDashboard from "./3.UserDashboard/1.0.UserDashboard";
import "./0.1.Account.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
    const [theme, setTheme] = useState("DarkTheme");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    function handleTheme() {
        setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    if (isAuthenticated) {
        return <UserDashboard />;
    }

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
        </div>
    )
}
