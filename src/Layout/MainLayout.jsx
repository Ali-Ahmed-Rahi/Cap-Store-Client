import { Outlet } from "react-router-dom";
import Navbar from "../shered/Navbar";
import Footer from "../shered/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-117px)] bg-black pt-10 text-white">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
