import React, { useState } from "react";
import "./1.1.Login.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                navigate("/");
            } else {
                const data = await response.json();
                setError(data.message || "Une erreur est survenue lors de la connexion");
            }
        } catch (error) {
            setError("Une erreur est survenue lors de la connexion");
        }
    };

    return (
        <div className="LoginPage">
            <div className="BodyLogin">
                <div className="LoginForm">
                    <div className="LoginHomepage">
                        <h2>Connexion</h2>
                        <NavLink to="/"> Accueil</NavLink>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="UserId">
                            <div>
                                <p>Email : </p>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="PasswordArea">
                                <p>Mot de passe : </p>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Mot de passe"
                                />
                                {error && <p className="Error">{error}</p>}
                            </div>
                        </div>

                        <br />
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
