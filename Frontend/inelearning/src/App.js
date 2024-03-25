import "./App.css";
import React from "react";
import Home from "./Components/Landing Page/Home";
import LoginPage from "./Components/Authentification Page/LoginPage";
import Feed from "./Components/Feed Page/Feed";
import ErrorPage from "./Components/errorPage";
import ProfilePage from "./Components/Profile Page/ProfilePage";
import {createBrowserRouter} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/feed",
    element: <Feed />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
    errorElement: <ErrorPage />,
  },
  

]);


export default router;
