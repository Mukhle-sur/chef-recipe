import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Terms from "../pages/terms/Terms";
import Error from "../pages/error/Error";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({ params }) => fetch(`https://my-chef-server.onrender.com/chef`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivetRoute>
            <ChefRecipe></ChefRecipe>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://my-chef-server.onrender.com/chef/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);

export default router;
