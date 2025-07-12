import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Login from "../Page/Login";

export let myRoute=createBrowserRouter([
      {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element: <Home/>

        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
        {
          path:"/login",
          element:<Login/>
        }
      ]
    }
  ])