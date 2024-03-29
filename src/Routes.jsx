import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/dhiwise-dashboard", element: <Home /> },
    { path: "/blogdetails", element: <BlogDetails /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/bloggerdetails", element: <BloggerDetails /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
