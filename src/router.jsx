import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/0.0.ErrorPage";
import HomePage from "./pages/1.0.HomePage";

import Account from "./pages/5.Accounts/0.0.Account";
import GCU from "./pages/0.1.CGU";
import Privacy from "./pages/0.2.Privacy";

import WebDev from "./pages/3.Tutos/1.WebDeveloppement/0.Annexes/0.0.WebDev";
import BuildExpressServer from "./pages/3.Tutos/1.WebDeveloppement/2.JS/3.Express/1.0.BuildExpressServer";
import SetRouter from "./pages/3.Tutos/1.WebDeveloppement/2.JS/4.Routes/SetRouter";
import MongoDB from "./pages/3.Tutos/1.WebDeveloppement/2.JS/5.MongoDB/SetMongoDB";
import Mongoose from "./pages/3.Tutos/1.WebDeveloppement/2.JS/6.Mongoose/Mongoose";

import WritingCourses from "./pages/5.Accounts/4.WritingCourses/0.0.WritingCourses";

import FormulairePublicationCours from "./pages/5.Accounts/5.FormulairePublicationCours/1.0.FormulairePublicationCours";
import Tutos from "./pages/3.Tutos/0.0.Tutos";
import OpenPyXl from "./pages/3.Tutos/2.OpenPyXl/1.0.OpenPyXl";

import Fondator from "./pages/0.Admin/0.Fondator/0.0.Fondator";

import Register from "./pages/5.Accounts/1.Register/1.0.Register";
import ExcelInstall from "./pages/3.Tutos/2.OpenPyXl/2.0.ExcelInstall";
import ExcelCalendInit from "./pages/3.Tutos/2.OpenPyXl/3.0.ExcelCalendInit";
import PublishedCourse from "./pages/5.Accounts/5.FormulairePublicationCours/2.0.PublishedCourse";
import Skills from "./pages/6.Skills/0.Skills";
import Subjects from "./pages/1.Subjects/0.Subjects";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children : [
        { index : true, element : <HomePage /> },

        { path : "account", element : <Account /> },
        { path : "GCU", element : <GCU /> },
        { path : "privacy", element : <Privacy /> },

        { path : "/register", element : <Register/> },

        { path : "/subjects", element : <Subjects/>},

        { path : "/skills", element : <Skills/>},

        { path : "account/writingcourses", element : <WritingCourses /> },
        { path : "account/formulairePublicationCours", element : <FormulairePublicationCours /> },
        { path : "Tutos", element : <Tutos />, },
        { path : "Tutos/WebDev", element : <WebDev />, },
        { path : "Tutos/OpenPyXl", element : <OpenPyXl />, },
        { path : "Tutos/OpenPyXl/ExcelInstall", element : <ExcelInstall />, },
        { path : "Tutos/OpenPyXl/ExcelCalendInit", element : <ExcelCalendInit />, },

        { path : "Tutos/WebDev/Express", element : <BuildExpressServer /> },
        { path : "Tutos/WebDev/Routes", element : <SetRouter /> },
        { path : "Tutos/WebDev/MongoDB", element : <MongoDB /> },
        { path : "Tutos/WebDev/Mongoose", element : <Mongoose /> },

        { path : "Account/Fondator", element : <Fondator/> },
        { path: "cours/:courseNumber", element: <PublishedCourse /> }, // Route ajoutée
        ]
    }
]);