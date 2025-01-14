import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashBoard/Sidebar";


const DashBoard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 bg-black ">
        <div className="col-span-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-10 p-12 bg-black">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashBoard;