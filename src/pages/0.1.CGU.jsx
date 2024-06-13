import { NavLink } from "react-router-dom";
import "./0.1.CGU.css";
import NavBarPrimary from "../components/1.NavBarPrimary/NavBarPrimary";
import NavBarSecondary from "../components/2.NavBarSecondary/NavBarSecondary";
import { useState } from "react";

export default function GCU() {
    const [theme, setTheme] = useState("DarkTheme");
  
    function handleTheme() {
      setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
    }
      const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
  return (
    <div className={`${bodyTheme}`}>       

        <NavBarPrimary handleTheme={handleTheme} />
        <NavBarSecondary />
    
        <div className="container">
        
            <h1>Conditions Générales d'Utilisation (CGU)</h1>

            <h2>1. Objet</h2>
            <p>Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions dans lesquelles les utilisateurs 
                 peuvent accéder et utiliser le site web Centralisinfos.</p>

            <h2>2. Acceptation des CGU</h2>
            <p>L'utilisation du Site est soumise à l'acceptation des présentes CGU. 
                En accédant au Site, l'Utilisateur reconnaît avoir pris connaissance des CGU et accepte de s'y conformer.</p>

            <h2>3. Inscription et Compte Utilisateur</h2>
            <h3>3.1. Création de Compte</h3>
            <p>Pour accéder à certains services du Site, l'Utilisateur doit créer un compte en fournissant des informations personnelles exactes, complètes et à jour.</p>

            <h3>3.2. Responsabilité de l'Utilisateur</h3>
            <p>L'Utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toutes les activités effectuées sous son compte. 
                En cas d'utilisation non autorisée de son compte, l'Utilisateur doit immédiatement en informer Centralisinfos.</p>

            <h2>4. Utilisation du Site</h2>
            <h3>4.1. Contenu du Site</h3>
            <p>Le Site propose des cours et tutoriels pour différents niveaux et cursus éducatifs. 
                L'Utilisateur s'engage à utiliser le Site de manière conforme à la législation en vigueur et aux présentes CGU.</p>

            <h3>4.2. Comportement de l'Utilisateur</h3>
            <p>L'Utilisateur s'engage à ne pas utiliser le Site pour transmettre des contenus illégaux, nuisibles, menaçants, abusifs, harcelants, diffamatoires, 
                vulgaires, obscènes, ou autrement répréhensibles.</p>

            <h2>5. Protection des Données Personnelles</h2>
            <h3>5.1. Collecte des Données</h3>
            <p>Centralisinfos collecte et traite des données personnelles conformément à sa <NavLink to={"/Privacy"}> Politique de Confidentialité.</NavLink></p>

            <h3>5.2. Droits des Utilisateurs</h3>
            <p>Conformément au RGPD, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et de portabilité de ses données personnelles, 
                ainsi que du droit de s'opposer ou de demander la limitation du traitement de ses données.</p>

            <h2>6. Propriété Intellectuelle</h2>
            <h3>6.1. Contenu du Site</h3>
            <p>Tous les contenus disponibles sur le Site, y compris les textes, images, vidéos, et autres éléments, 
                sont protégés par des droits d'auteur et autres droits de propriété intellectuelle. 
                L'Utilisateur s'engage à ne pas reproduire, distribuer, ou autrement utiliser ces contenus sans autorisation préalable.</p>

            <h3>6.2. Licence Utilisateur</h3>
            <p>Centralisinfos accorde à l'Utilisateur une licence limitée, 
                non exclusive et non transférable pour accéder et utiliser le Site et ses contenus pour un usage personnel et non commercial.</p>

            <h2>7. Limitation de Responsabilité</h2>
            <p>Centralisinfos s'efforce de fournir des informations exactes et à jour, mais ne garantit pas l'exactitude, 
                la complétude ou la pertinence des contenus du Site. Centralisinfos ne saurait être tenu responsable des 
                dommages directs ou indirects résultant de l'utilisation du Site.</p>

            <h2>8. Modification des CGU</h2>
            <p>Centralisinfos se réserve le droit de modifier les présentes CGU à tout moment. 
                Les modifications seront effectives dès leur publication sur le Site. L'Utilisateur est invité à consulter régulièrement les CGU.</p>

            <h2>9. Droit Applicable et Juridiction</h2>
            <p>Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

            <h2>10. Contact</h2>
            <p>Pour toute question relative aux CGU, l'Utilisateur peut contacter Centralisinfos à l'adresse suivante : <a href="mailto:[centralisinfos.fondateur@gmail.com]">centralisinfos.fondateur@gmail.com</a>.</p>

        </div>
    </div>
    );
    }
