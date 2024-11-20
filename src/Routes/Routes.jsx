import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Product from "../page/Product";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import Login from "../page/Login";
import Register from "../page/Register";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product',
        element:<Product></Product>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contactus',
        element:<ContactUs></ContactUs>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      
    ]
  },
]);