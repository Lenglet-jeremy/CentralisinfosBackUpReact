import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./1.1.Login.css";

export default function Login() {
    const [theme, setTheme] = useState("DarkTheme");
    const [user, setUser] = useState([]);
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
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
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userMail,
                    password: userPassword
                })
            });

            if (!response.ok) {
                throw new Error('Mail ou mot de passe incorrect');
            }

            const data = await response.json();
            setUser(prevUser => [...prevUser, data]);
            navigate('/');

            setUserMail('');
            setUserPassword('');
            setError('');
        } catch (error) {
            setError('Mail ou mot de passe incorrect');
            console.error('Mail ou mot de passe incorrect:', error);
        }
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
    );
}