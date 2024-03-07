import "./App.css";
import * as React from "react";
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import ErrorPage from "./Components/errorPage";
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
  

]);


export default router;
