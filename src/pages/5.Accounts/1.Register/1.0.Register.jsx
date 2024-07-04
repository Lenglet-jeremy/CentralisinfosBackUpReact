import React, { useState } from "react";
import "./1.1.Register.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordConditions, setPasswordConditions] = useState([]);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handlePasswordConditions = (event) => {
    const password = event.target.value;
    const conditions = [];
    if (password.length < 8) {
      conditions.push('Le mot de passe doit contenir au moins 8 caractères');
    }
    if (!/\d/.test(password)) {
      conditions.push('Le mot de passe doit contenir au moins un chiffre');
    }
    if (!/[A-Z]/.test(password)) {
      conditions.push('Le mot de passe doit contenir au moins une majuscule');
    }
    setPasswordConditions(conditions);
    setUserPassword(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userPassword !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    if (!checked) {
      setError('Vous devez accepter les conditions générales');
      return;
    }

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userName,
        email: userMail,
        password: userPassword,
        RGPD: checked 
      })
    })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      navigate('/');
    })
    .catch(error => console.error('Error posting data: ', error));

    setUserName('');
    setUserMail('');
    setUserPassword('');
    setConfirmPassword('');
    setChecked(false);
  };

  return (
    <div className={`RegisterPage`}>
      <div className="BodyRegister">
        <div className="RegisterForm">
          <div className="RegisterHomepage">
            <h2>Inscription</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="UserId">
              <div>
                <p>Pseudo : </p>
                <input 
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Pseudo"
                />
              </div>
              <div>
                <p>Mail : </p>
                <input 
                  type="text"
                  value={userMail}
                  onChange={(e) => setUserMail(e.target.value)}
                  placeholder="Mail" 
                />
              </div>
              <div className="PasswordArea">
                <p>Mot de passe : </p>
                <input 
                  type="password"
                  value={userPassword}
                  onChange={handlePasswordConditions}
                  placeholder="Mot de passe" 
                />
                {passwordConditions.length > 0 && (
                  <div className="PasswordConditions">
                    <ul>
                      {passwordConditions.map((condition, index) => (
                        <li className="PasswordConditions" key={index}>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <br /><br />
                <p>Confirmation : </p>
                <input 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmation Mot de passe" 
                />
                {error && <p className="Error">{error}</p>}
              </div>
            </div>
            <br />
            <input type="checkbox"
                   defaultChecked={false}
                   onChange={handleChecked} />
            <label>J'accepte les <NavLink to={'/GCU'}><i>Conditions Générales d'Utilisation</i></NavLink></label>
            <br /><br />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  );
}
