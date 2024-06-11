import { NavLink } from "react-router-dom";
import "./0.0.WebDev.css";

export default function WebDev() {
    return (
        <div className="Container">
            <div className="Sommary">
                {/* NavLink... */}
                <NavLink to={"Express"}>Créer un serveur express </NavLink>
                <NavLink to={"Routes"}>Architecturer les routes</NavLink>
                <NavLink to={"MongoDB"}>Paramétrer MongoDB</NavLink>
                <NavLink to={"Mongoose"}>Utiliser Mongoose</NavLink>
            </div>
        </div>
    )
}
