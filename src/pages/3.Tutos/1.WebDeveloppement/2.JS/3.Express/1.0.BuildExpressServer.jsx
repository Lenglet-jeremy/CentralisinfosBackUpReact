import React, { useState } from "react";
import NavBarPrimary from '../../../../../components/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../../../../components/2.NavBarSecondary/NavBarSecondary';
import "../0.Annexes/1.StylingTutos.css";

export default function BuildExpressServer() {
    
  const [theme, setTheme] = useState("DarkTheme");

  function handleTheme() {
    setTheme(theme === "DarkTheme" ? "LightTheme" : "DarkTheme");
  }
    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";
    return (
        <div className={`${bodyTheme} `}>
            
          <NavBarPrimary handleTheme={handleTheme} />
          <NavBarSecondary />
<h1>Créer un serveur Express</h1>

<div class="CoursePage">

<div class="Sommary">
    <h2>Sommaire</h2>
    <p>Héritage multiple et polymorphisme</p>
</div>

<div class="CourseBody">

<div class="Section">
    <p>Vous devez commencez par <i>installer <i>Node.js</i></i> et npm sur votre machine.</p>
    <p>Vous pouvez le faire en suivant ce <a href="https://nodejs.org/en/download/">lien</a>.</p>
</div>

<div class="Section">
    <p>Ensuite, vous devez <i>exécuter cette commande</i> dans le terminal placé <i>à la racine de votre projet</i> : </p>
    <code>
        <pre>npm init -y</pre>
    </code>
    <p>Cette commande va créer un fichier <i>package.json</i> qui va contenir les informations, les scripts ou les dépendences de votre projet.</p>
</div>

<div class="Section">
    <p>Ensuite, vous devez <i>installer Express en exécutant cette commande</i> : </p>
    <code>
        <pre>npm install express</pre>
    </code>
</div>

<div class="Section">
    <p>Après avoir installer Express, vous devez <i>créer un fichier <i>server.js</i> en y ajoutant ce code</i> :</p>

<code>
    {/* <pre>{`
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(port, () => {
console.log("Server is running on http://localhost:${port}");
});`}
    </pre>   */}
</code>
</div>

<div class="Section">
    <p>Enfin, vous devez <i>exécuter cette commande</i> pour lancer votre serveur : </p>
    <code>
        <pre>node server.js</pre>
    </code>
    <p>Vous pouvez maintenant ouvrir votre navigateur et <i>taper cette adresse</i> : <a href="http://localhost:3000" target="_blanck">http://localhost:3000</a></p>
</div>

<div class="Section">
    <p>Nous allons désormais créer nos premières routes</p>
    <p>Pour cela nous devons créer des points de terminaisons definissant le chemin d'une URL,
    le chemin d'une URL se trouvant à la suite du nom de domaine, 
    ces points de terminaison permettent de sélectionner les ressources que nous voulons consultés.</p>
</div>

<div class="Section">
    <p>Nous allons ajouter le fichier JSON qui contient quelques données de films (titre et résumé).
    Cela simule une récupération de données depuis une base de données.</p>
    <p><i>Créer un fichier <i>movies.json</i> et ajouter ce code</i> :</p>

<code>
    {/* <pre>{`
[
    {
        "title": "Oppenheimer",
        "resume": "En 1942, convaincus que l’Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le 'Projet Manhattan' destiné à mettre au point la première bombe atomique de l’histoire. Pour piloter ce dispositif, le gouvernement engage J. Robert Oppenheimer, brillant physicien, qui sera bientôt surnommé 'le père de la bombe atomique'. C’est dans le laboratoire ultra-secret de Los Alamos, au cœur du désert du Nouveau-Mexique, que le scientifique et son équipe mettent au point une arme révolutionnaire dont les conséquences, vertigineuses, continuent de peser sur le monde actuel…"
    },
    {
        "title": "Anatomie d'une chute",
        "content": "Sandra, Samuel et leur fils malvoyant de 11 ans, Daniel, vivent depuis un an loin de tout, à la montagne. Un jour, Samuel est retrouvé mort au pied de leur maison. Une enquête pour mort suspecte est ouverte. Sandra est bientôt inculpée malgré le doute : suicide ou homicide ? Un an plus tard, Daniel assiste au procès de sa mère, véritable dissection du couple..."
    },
    {
        "title": "Pauvres crétures",
        "content": "Bella est une jeune femme ramenée à la vie par le brillant et peu orthodoxe Docteur Godwin Baxter. Sous sa protection, elle a soif d’apprendre. Avide de découvrir le monde dont elle ignore tout, elle s'enfuit avec Duncan Wedderburn, un avocat habile et débauché, et embarque pour une odyssée étourdissante à travers les continents. Imperméable aux préjugés de son époque, Bella est résolue à ne rien céder sur les principes d’égalité et de libération..."
    },
    {
        "title": "Winter Break",
        "content": "Hiver 1970 : Monsieur Hunham est professeur d’histoire ancienne dans un prestigieux lycée d’enseignement privé pour garçons de la Nouvelle-Angleterre. Pédant et bourru, il n’est apprécié ni de ses élèves ni de ses collègues. Alors que Noël approche, Monsieur Hunham est prié de rester sur le campus pour surveiller la poignée de pensionnaires consignés sur place. Il n’en restera bientôt qu’un : Angus, un élève de 1ère aussi doué qu’insubordonné. Trop récemment endeuillée par la mort de son fils au Vietnam, Mary, la cuisinière de l’établissement, préfère rester à l’écart des fêtes. Elle vient compléter ce trio improbable..."
    }
]`}
    </pre>   */}
</code>
</div>

<div class="Section">
<p>Nous récupérons depuis notre fichier <i>index.js</i> ces données. Nous allons aussi modifier notre port pour l’écoute de requêtes http. </p>
<p>Il utilisera la variable d’environnement, sinon, si elle n’est pas définie, grâce à l’opérateur ||, il utilisera le port 5000.</p>
<p><i>Remplacez le contenu du fichier <i>server.js</i> de sorte à avoir ce code</i> :</p>



<code>
    {/* <pre>{`
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const movies = require('./movies.json');

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.get('/movies', (req, res) => {
const data_movies = [...movies];
res.send(data_movies);
});

app.listen(port, () => {
console.log("Server is running on http://localhost:${port}");
});`}
</pre>   */}
</code>
</div>

<div class="Section">
    <p>Pour ne pas devoir relancer le serveur à chaque nouvelle modification nous allons installer un utilitaire : nodemon</p>
    <p>nodemon va nous permettre de redémarrer automatiquement le serveur dès qu'il y a un enregistrement de fichier. </p>
    <p>Si la commande <i>node server.js</i> est toujours en cours, tuez le processus avec un ctrl+c</p>
    <p>Pour l'installation de nodemon <ins/>exécutez la commande :</p>
        <code>
            <pre>npm i nodemon -D</pre>  
        </code>
</div>

<div class="Section">
    <p>Une fois nodemon intallé, nous allons <i>supprimer le script test au profit du script start dans le fichier <i>package.json</i></i>.</p>
    <p>Remplacez le contenu du fichier package.json de sorte à avoir ce code :</p>



<code>
    {/* <pre>{`
{
    ...
    "scripts": {
    "start": "nodemon server.js" // Ici
    ...
},
    "dependencies": {
    ...
},
    "devDependencies": {
    ...
}
}`}
</pre>   */}
</code>
</div>

<div class="Section">
    <p>Enfin, vous pouvez <i>exécuter votre serveur en exécutant cette commande</i> : </p>
<code>
    <pre>npm start</pre>
</code>
    <p>Vous pouvez maintenant <i>ouvrir votre navigateur et taper cette adresse : <i>http://localhost:5000/movies</i></i></p>
</div>
    
<div class="Section">
    <p>Nous allons tester une fonctionnalité de notre API : la méthode post </p>
    <p>La méthode post va servir à rajouter des nouvelles données aux données existantes.</p>
    <p>Nous allons utiliser un utilitaire : cURL.</p>
    <p>Nous allons modifier notre fichier d’entrée. Nous allons y déclarer un tableau qui contiendra tous les films, existants et ceux que nous allons ajouter.</p>
    <p>Nous fusionnons aussi le retour de la méthode GET, pour actualiser à chaque nouvel ajout.</p>
    <p><i>Remplacez le contenu du fichier <i>server.js</i> de sorte à avoir ce code</i> :</p>
    


<code>
    {/* <pre>{`
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const movies = require('./movies.json');

let allMovies = [];

app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.get('/movies', (req, res) => {
const data_movies = [...allMovies,...movies];
res.send(data_movies);
});

app.post('/movies/create', (req, res) => {
allMovies = [...allMovies, req.body];
res.send("New movie added successfully");
});

app.listen(port, () => {
console.log("Server is running on http://localhost:${port}");
});
    `}</pre>   */}
</code>
</div>

<div class="Section">
    <p>Ajout de données avec cURL :</p>
    <br/>
    <p>Nous allons utiliser le mot clé curl puis avec -X la méthode à savoir POST. </p>
    <p>Puis l’url qui contient notre route /movies/create.</p>
    <p>Ensuite l’option -H suivi de ‘Content-Type : application/json’ précise que le corps de la requête est du JSON.</p> 
    <p>Enfin l’option -d suivi d’un objet JSON correspond aux données fournies.</p>
    <br/>
    <p><i>Tout en gardant le terminal courant avec npm start éxécuté, ouvrez un 2e terminal et saisissez la commande suivant</i> : </p>


<code>
    {/* <pre>{`
curl -X POST \
    http://localhost:5000/movies/create \
    -H 'Content-Type: application/json' \
    -d '[{
        "title": "Barbie",
        "resume": "A Barbie Land, vous êtes un être parfait dans un monde parfait ! Sauf si vous êtes en crise existentielle, ou si vous êtes Ken..."
        },
        {
        "title": "The Matrix",
        "resume": "Neo, a computer hacker, learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
        }
    ]'       `} 
    </pre>   */}
</code>

<p>Vous pouvez maintenant <i>ouvrir votre navigateur et taper cette adresse : <i>http://localhost:5000/movies</i></i></p>
</div>
<div class="Section">
    <h2>Post scriptum !</h2>
    <p>Ce tutos à été rédigé par Lenglet Jérémy le 16/05/2024 à 00:20</p>
    <p>Ce cours à été rédigé à l'origine par ... </p>
    <p>Contact de M. ... </p>
</div>


</div>
</div>
</div>
    )
}