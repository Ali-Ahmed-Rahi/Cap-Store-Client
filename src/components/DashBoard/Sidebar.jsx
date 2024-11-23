import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { MdAddCircleOutline, MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import { TbJewishStar } from "react-icons/tb";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <MdAddCircleOutline />,
  },
  {
    id: 2,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  
];


const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "WishList",
    icon: <TbJewishStar />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  // console.log(userData);
  const { logOut } = useAuth();
  return (
    <>
      <div className=" border-r-2 bg-black min-h-screen h-full px-8 py-16 text-white">
        <h1 className="font-bold text-3xl mb-8 text-center">Cap Store</h1>
        <ul className="flex flex-col gap-2">
          <li className="btn">
            <AiOutlineHome />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="btn">
            <GrOverview />
            <NavLink to="/dashboard/overview">Overview</NavLink>
          </li>

          {/*seller map  */}
          {userData.role === "seller" &&
            sellerRoutes.map((route) => (
              <li key={route.id} className="btn ">
                <NavLink className="flex gap-1" to={route.route}>
                  <>{route.icon}</>
                  <p>{route.title}</p>
                </NavLink>
              </li>
            ))}
            {/* buyer map */}
          {userData.role === "buyer" &&
            buyerRoutes.map((route) => (
              <li key={route.id} className="btn ">
                <NavLink className="flex gap-1" to={route.route}>
                  <>{route.icon}</>
                  <p>{route.title}</p>
                </NavLink>
              </li>
            ))}

          <li className="mx-auto btn" onClick={() => logOut()}>
            <BiLogOut />
            <NavLink>LogOut</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
