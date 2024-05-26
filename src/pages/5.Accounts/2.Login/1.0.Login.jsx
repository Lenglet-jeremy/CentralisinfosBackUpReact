import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./1.1.Login.css";


export default function Login() {
    const [theme, setTheme] = useState("DarkTheme");
    const [user, setUser] = useState([]);
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/login')
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    function handleTheme() {
        setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }

    function userInput(event) {
        console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userMail,
                password: userPassword
            })
        })
            .then(response => response.json()).then(data => {
                setUser([...user, data]);
                navigate('/');
            })
            .catch(error => console.error('Error posting data: ', error));
        setUserMail('');
        setUserPassword('');
    };

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
            <div className={`${bodyTheme}Login LoginPage`}>
                <div className={`BodyLogin`}>
                    <h1>Connexion</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email :</label>
                            <br />
                            <input type="email" id="email" name="email" onChange={(event) => setUserMail(event.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="password">Mot de passe :</label>
                            <br />
                            <input type="password" id="password" name="password" onChange={(event) => setUserPassword(event.target.value)} />
                        </div>

                        <button type="submit">Connexion</button>
                    </form>
                    <NavLink to="/register">Pas encore de compte ?</NavLink>
                </div>
            </div>
    );
}