import React, { useContext, useState } from "react";
import "./1.1.Register.css";
import NavBarPrimary from '../../components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../components/2.NavBarSecondary/NavBarSecondary';

export default function Register() {
    
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }

  const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    return (
        <div className={`${bodyTheme}Register RegisterPage`}>
          <NavBarPrimary handleTheme={handleTheme} />
          <NavBarSecondary />
          <div className={`BodyRegister`}>
            <div className="LeftPanel">
              <img src="public/LogoCentralisinfos/300ppi/LOGO3.png" alt="" />
              <p>Contact : centralisinfos.fondateur@gmail.com </p>
            </div>

            <div className="RightPanel">

              <h2>Inscription</h2>

              <form action="">
                <div className="UserId">
                  <div>
                    <div className="Left">
                      <p htmlFor="userId">Pseudo : </p>
                      <input type="text" placeholder="Pseudo" />
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

                <input type="checkbox" />
                <label>J'accepte les Conditions Générales d'Utilisation</label>

                <br /><br />

                <button>S'inscrire</button>

              </form>
            </div>

          </div>
        </div>
    )
}