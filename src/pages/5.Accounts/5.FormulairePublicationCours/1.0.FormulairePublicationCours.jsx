import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarPrimary from '../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary';
import { ThemeContext } from '../../../ThemeContext';
import { ContentContext } from '../../../ContentContext';

import "./1.0.FormulairePublicationCours.css";

export default function FormulairePublicationCours() {
    const { content } = useContext(ContentContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const [categorie, setCategorie] = useState('');
    const [nomCours, setNomCours] = useState('');
    const [niveau, setNiveau] = useState('');
    const [prerequis, setPrerequis] = useState('');
    const [urlCours, setUrlCours] = useState('');
    const [courseNumber, setCourseNumber] = useState(1);

    const navigate = useNavigate();

    const bodyTheme = theme === "DarkTheme" ? "DarkBody" : "LightBody";

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const courseData = {
            categorie,
            nomCours,
            niveau,
            prerequis,
            content: content,
            urlCours: urlCours || `/CoursNumero${courseNumber}`
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseData)
            });
        
            if (!response.ok) {
                const errorMessage = await response.text(); // Ajoutez cette ligne pour lire la réponse
                throw new Error(errorMessage);
            }
        
            const responseData = await response.json();
            console.log('Course saved:', responseData);
            navigate(`/cours/${responseData._id}`, { state: { courseData: responseData } });
        
        } catch (error) {
            console.error('Erreur lors de la sauvegarde du cours:', error);
        }
        
    };
    

    return (
        <div>
            <NavBarPrimary handleTheme={toggleTheme} />
            <NavBarSecondary />
            <div className={`${bodyTheme} Publication`}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Catégorie du cours:
                        <input type="text" value={categorie} onChange={(e) => setCategorie(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Nom du cours:
                        <input type="text" value={nomCours} onChange={(e) => setNomCours(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Niveau du cours:
                        <input type="text" value={niveau} onChange={(e) => setNiveau(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Prérequis du cours:
                        <input type="text" value={prerequis} onChange={(e) => setPrerequis(e.target.value)} />
                    </label>
                    <br />
                    {/* <label>
                        URL du cours (optionnel):
                        <input type="url" value={urlCours} onChange={(e) => setUrlCours(e.target.value)} />
                    </label> */}
                    <br />
                    <button type="submit">Publier le cours</button>
                </form>
            </div>
        </div>
    );
}
