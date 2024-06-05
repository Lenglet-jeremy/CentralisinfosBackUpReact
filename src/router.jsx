import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/0.0.ErrorPage";
import HomePage from "./pages/1.0.HomePage";
import Account from "./pages/5.Accounts/0.0.Account";
import GCU from "./pages/0.1.CGU";
import Privacy from "./pages/0.2.Privacy";
import WebDev from "./pages/3.Tutos/1.WebDeveloppement/0.Annexes/0.0.WebDev";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        errorElement : <ErrorPage />,
        children : [
        {
            index : true,
            element : <HomePage />
        },
        {
            path : "account",
            element : <Account />
        },
        {
            path : "GCU",
            element : <GCU />
        },
        {
            path : "privacy",
            element : <Privacy />
        },
        {
            path : "WebDev",
            element : <WebDev />
        }
        ]
    }
]);