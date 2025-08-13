import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import React from 'react';
import Layout from "../Layout";
import Home from "../screens/Home";
import About from "../screens/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "home",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
])

export const AppRouter = () =>{
    return <RouterProvider router={router} />
}