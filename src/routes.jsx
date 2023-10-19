
import { createBrowserRouter } from "react-router-dom";
import Home from "./components/home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
])