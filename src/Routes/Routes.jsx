import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home";
import Product from "../page/Products";
import About from "../page/About";
import ContactUs from "../page/ContactUs";
import Login from "../page/Login";
import Register from "../page/Register";
import DashBoard from "../Layout/DashBoard";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Overview from "../page/DashBoard/Overview";
import AddProducts from "../page/DashBoard/Seller/AddProducts";
import MyProducts from "../page/DashBoard/Seller/MyProducts";
import SellerRoute from "../PrivetRoutes/SellerRoute";
import BuyerRoutes from "../PrivetRoutes/BuyerRoutes";
import WishList from "../page/DashBoard/Buyer/WishList";


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
  {
    path:"/dashboard",
    element:(<PrivetRoutes><DashBoard></DashBoard></PrivetRoutes>),
    children:[
      {
        path:'/dashboard/overview',
        element:<Overview></Overview>
      },
      // buyer Route
      {
        path:'/dashboard/wishlist',
        element:<BuyerRoutes><WishList></WishList></BuyerRoutes>
      },
      // seller route
      {
        path:'/dashboard/add-products',
        element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
      },
      {
        path:'/dashboard/my-products',
        element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
      }
    ]
  }
]);