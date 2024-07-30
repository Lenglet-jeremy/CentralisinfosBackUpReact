import { NavLink } from "react-router-dom"
import "./0.0ErrorPage.css"

export default function ErrorPage(){
    return (
        <>
            <div className="ErrorPage">
            <span className="Accueil"><NavLink to={"/"}><button>&#x21E6; Accueil</button></NavLink></span>
                <h1>404</h1>
                <div className="Questionnings">
                    <p>404 : Désolé mais cette page s'est perdue dans l'espace-temps</p>
                </div>
            </div>
        </>
    )
}