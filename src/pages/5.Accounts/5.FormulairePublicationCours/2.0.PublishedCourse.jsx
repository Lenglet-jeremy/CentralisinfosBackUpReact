import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBarPrimary from '../../../components/1.NavBars/1.NavBarPrimary/NavBarPrimary';
import NavBarSecondary from '../../../components/1.NavBars/2.NavBarSecondary/NavBarSecondary';
import { ContentContext } from '../../../ContentContext';
import { ThemeContext } from '../../../ThemeContext';

export default function PublishedCourse() {
    const { state } = useLocation();
    const [courseData, setCourseData] = useState(state?.courseData || null);
    const { content, setContent } = useContext(ContentContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        if (!courseData) {
            // Si les données du cours ne sont pas dans l'état, récupérez-les depuis l'API
            const fetchCourseData = async () => {
                const response = await fetch(`http://localhost:5000/api/courses/${state.courseId}`);
                const data = await response.json();
                setCourseData(data);
                setContent(data.content);  // Mettre à jour le contenu dans le contexte
            };
            fetchCourseData();
        } else {
            setContent(courseData.content);  // Mettre à jour le contenu dans le contexte
        }
    }, [courseData, setContent, state?.courseId]);

    if (!courseData) {
        return <div>Course not found</div>;
    }

    return (
        <div>
            <NavBarPrimary handleTheme={toggleTheme}/>
            <NavBarSecondary />
            <div className="PublishedCoursePage">
                <h1>{courseData.nomCours}</h1>
                <div className="CourseContent">
                    <h2>Contenu du cours :</h2>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </div>
    );
}
