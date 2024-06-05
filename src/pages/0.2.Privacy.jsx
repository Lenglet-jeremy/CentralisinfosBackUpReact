import { useState } from "react";
import NavBarPrimary from "../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../components/2.NavBarSecondary/NavBarSecondary";
import "./0.2.Privacy.css";

export default function Privacy() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        
    <div className={`${bodyTheme}`}>
            <NavBarPrimary handleTheme={handleTheme} />
            <NavBarSecondary />
        <div class="container">
            
            
            <h1>Politique de Confidentialité</h1>

            <p>Dernière mise à jour : 05/06/2024</p>

            <p>Bienvenue sur Centralisinfos. Nous accordons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité explique quelles informations nous collectons, comment nous les utilisons et les protégeons, et vos droits en matière de protection des données.</p>

            <h2>1. Informations que Nous Collectons</h2>
            <p>Nous collectons les informations suivantes :</p>
            <ul>
                <li><strong>Informations d'inscription :</strong> adresse e-mail, mot de passe.</li>
                <li><strong>Informations d'utilisation :</strong> données de navigation, adresses IP, préférences utilisateur.</li>
                <li><strong>Contenu utilisateur :</strong> cours téléchargés, commentaires, messages sur le forum.</li>
            </ul>

            <h2>2. Utilisation de Vos Informations</h2>
            <p>Nous utilisons vos informations pour :</p>
            <ul>
                <li>Fournir, exploiter et améliorer notre Site et nos services.</li>
                <li>Gérer votre compte et vous fournir un support client.</li>
                <li>Personnaliser votre expérience sur le Site.</li>
                <li>Communiquer avec vous à propos de mises à jour, offres spéciales et autres informations liées à notre Site.</li>
            </ul>

            <h2>3. Partage de Vos Informations</h2>
            <p>Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :</p>
            <ul>
                <li>Avec votre consentement explicite.</li>
                <li>Pour se conformer à des obligations légales ou répondre à des demandes légales des autorités publiques.</li>
                <li>Pour protéger et défendre nos droits ou notre propriété.</li>
            </ul>

            <h2>4. Sécurité de Vos Informations</h2>
            <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, 
                la divulgation ou la destruction.</p>

            <h2>5. Vos Droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
                <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.</li>
                <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction des informations inexactes ou incomplètes.</li>
                <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données personnelles.</li>
                <li><strong>Droit à la limitation du traitement :</strong> Vous pouvez demander la limitation du traitement de vos données personnelles.</li>
                <li><strong>Droit à la portabilité :</strong> Vous pouvez demander à recevoir vos données personnelles dans un format structuré, 
                couramment utilisé et lisible par machine.</li>
                <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données personnelles.</li>
            </ul>

            <h2>6. Cookies et Technologies Similaires</h2>
            <p>Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur notre Site. 
                Vous pouvez contrôler l'utilisation des cookies via les paramètres de votre navigateur.</p>

            <h2>7. Modifications de la Politique de Confidentialité</h2>
            <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications seront effectives dès leur publication sur cette page. 
                Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos informations.</p>

            <h2>8. Contact</h2>
            <p>Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité, 
                veuillez nous contacter à l'adresse suivante : <a href="mailto:[centralisinfos.fondateur@gmail.com]">centralisinfos.fondateur@gmail.com</a>.</p>

            <p><strong>Centralisinfos</strong><br/></p>
            {/* <p><strong>Adresse</strong>: [Votre adresse]<br/></p> */}
            <p><strong>Email</strong>: <a href="mailto:[centralisinfos.fondateur@gmail.com]">centralisinfos.fondateur@gmail.com</a><br/></p>
            {/* <p><strong>Téléphone</strong>: [Votre téléphone]</p> */}
        </div>
    </div>
    )
}