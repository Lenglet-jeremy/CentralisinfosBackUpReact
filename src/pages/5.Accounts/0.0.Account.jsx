import NavBar from "../../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../../components/2.NavBarSecondary/NavBarSecondary";
import Register from "./1.Register/1.0.Register";
import Login from "./2.Login/1.0.Login";

export default function Account() {
    return (
        <div>
            <NavBar />
            <NavBarSecondary />
            <Register />
            <Login />
            {/* Redéfinir le CSS de Register et Login de sorte à les faire apparaitre sur une seule page */}
            {/* Pour fix les erreurs : Error fetching data:  SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data
            Ré-adapter les POST envoyé par register et Login et adapter les POST de server.js */}
        </div>
    )
}