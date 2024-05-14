import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/0.ErrorPage";
import HomePage from "./pages/1.HomePage";
import Register from "./pages/A.Resgister/1.Register";

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
            path : "register",
            element : <Register />
        },
        ]
    }
]);