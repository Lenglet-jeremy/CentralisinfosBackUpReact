import React, { useContext, useState } from "react";
import "./1.1.Register.css";
import NavBarPrimary from '../../components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../components/2.NavBarSecondary/NavBarSecondary';
import { NavLink } from "react-router-dom";

export default function Register() {
    
  const [theme, setTheme] = useState("DarkTheme");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    numberPhone: "",
    token: "",
  });

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  } 

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

  function handleSubmit(event) {
    event.preventDefault(),
    fetch(process.env.MONGO_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {response.json()})
      .then((data) => {
        console.log(data);
      });
  }

    return (
        <div className={`${bodyTheme}Register RegisterPage`}>
          <NavBarPrimary handleTheme={handleTheme} />
          <NavBarSecondary />
          <div className={`BodyRegister`}>
            <div className="LeftPanel">
              <p>Contact : centralisinfos.fondateur@gmail.com </p>
            </div>

            <div className="RightPanel">
              <div className="RegisterHomepage">
              <h2>Inscription</h2>
              <NavLink to="/"> Accueil</NavLink>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="UserId">
                  <div>
                    <div className="Left">
                      <p htmlFor="userId">Pseudo : </p>
                      <input
                        type="text"
                        name="pseudo"
                        placeholder="Pseudo"
                        value={formData.pseudo}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="Right">
                      <p htmlFor="userId">Nom : </p>
                      <input type="text" placeholder="Nom" />
                      <p htmlFor="userId">Prenom : </p>
                      <input type="text" placeholder="Prenom" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="Left">
                      <p htmlFor="userId">Mail : </p>
                      <input type="text" placeholder="Mail" />
                    </div>
                    <div className="Right">
                      <p htmlFor="userId">Portable : </p>
                      <input type="text" placeholder="Portable" />
                    </div>
                  </div>
                  
                  <div className="PasswordArea">
                    <div className="Left">
                      <p className="Password">Mot de passe : </p>
                      <input type="text" placeholder="Mot de passe" />
                    </div>
                    <div className="Right">
                      <p className="Password">Confirmation : </p>
                      <input type="text" placeholder="Confirmation" />
                    </div>
                  </div>


                </div>

                <br /><br />

                <input type="checkbox" name="acceptConditions" checked={formData.acceptConditions} onChange={handleChange} />
                <label>J'accepte les Conditions Générales d'Utilisation</label>

                <br /><br />

                <button type="submit">S'inscrire</button>

              </form>
            </div>

          </div>
        </div>
    )
}