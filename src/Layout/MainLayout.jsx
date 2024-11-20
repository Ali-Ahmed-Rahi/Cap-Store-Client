import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar";
import Footer from "../shered/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-117px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;