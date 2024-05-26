import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/0.ErrorPage";
import HomePage from "./pages/1.HomePage";
import Account from "./pages/5.Accounts/0.0.Account";

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
        ]
    }
]);