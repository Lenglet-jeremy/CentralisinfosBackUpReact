import React, { useEffect, useState } from "react";
import "./1.1.Register.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
    
  const [theme, setTheme] = useState("DarkTheme");
  
  const [user, setuser] = useState([]);
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
      fetch('http://localhost:5000/api/register')
          .then(response => response.json())
          .then(data => setuser(data))
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
    fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: userName,
            email: userMail,
            password: userPassword 
        })
    })
    .then(response => response.json()).then(data => {
      setuser([...user, data]);
      navigate('/');
    })
    .catch(error => console.error('Error posting data: ', error));
    setUserName('');
    setUserMail('');
    setUserPassword('');
};


  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div className={`${bodyTheme}Register RegisterPage`}>
          <div className={`BodyRegister`}>

            <div className="Form">
              <div className="RegisterHomepage">
              <h2>Inscription</h2>
              <NavLink to="/"> Accueil</NavLink>
            </div>

              <form onSubmit={handleSubmit}>
                <div className="UserId">
                  <div>
                    <p htmlFor="userId">Pseudo : </p>
                    <input type="text"
                           value={userName}
                           onChange={(e) => setUserName(e.target.value)}
                           placeholder="Pseudo"
                />
                  </div>
                  
                <div>
                    <p htmlFor="userId">Mail : </p>
                    <input type="text" 
                          value={userMail}
                          onChange={(e) => setUserMail(e.target.value)}
                          placeholder="Mail" 
                    />
                </div>
                  
                <div className="PasswordArea">
                    <p className="Password">Mot de passe : </p>
                    <input type="text" 
                          value={userPassword}
                          onChange={(e) => setUserPassword(e.target.value)}
                          placeholder="Mot de passe" 
                    />

                    <p className="Password">Confirmation Mot de passe : </p>
                    <input type="text" placeholder="Confirmation Mot de passe" />
                </div>


                </div>

                <br /><br />

                <input type="checkbox" />
                <label>J'accepte les Conditions Générales d'Utilisation...</label>

                <br /><br />

                <button>S'inscrire</button>

              </form>
            </div>

          </div>
            <div className="Contact">
              <p>Contact : centralisinfos.fondateur@gmail.com </p>
            </div>
        </div>
    )
}