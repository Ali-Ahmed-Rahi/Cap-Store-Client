import { IoIosContact } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useUserData from "../Hooks/useUserData";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const userData = useUserData();
  const navigate = useNavigate();
  
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  const [isLgDevice, setIsLgDevice] = useState(false);

  // Check screen size to apply the scroll effect only for large devices
  useEffect(() => {
    const checkDeviceSize = () => {
      setIsLgDevice(window.innerWidth >= 1024); // lg breakpoint in Tailwind is 1024px
    };

    window.addEventListener('resize', checkDeviceSize);
    checkDeviceSize(); // Check size on initial load

    return () => {
      window.removeEventListener('resize', checkDeviceSize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (isLgDevice) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLgDevice]);

  const navLink = (
    <>
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/product">
        <p>Product</p>
      </NavLink>
      <NavLink to="/about">
        <p>About</p>
      </NavLink>
      <NavLink to="/contactus">
        <p>ContactUs</p>
      </NavLink>
    </>
  );

  return (
    <>
      <div className={`navbar fixed z-10 ${isLgDevice && isScrolled ? 'bg-black bg-opacity-55' : 'bg-black'} text-white`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold gap-3">
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Cap Chronicles</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-5">{navLink}</ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div>
              <div className="dropdown dropdown-end">
                <div className="flex">
                  <div className="badge bg-green-600 text-white">+{userData?.wishlist?.length}</div>
                  <div tabIndex={0} role="button" className="text-4xl">
                    <IoIosContact />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-3 shadow">
                  <div className="flex flex-col gap-2">
                    <li>
                      <NavLink to="/dashboard" className="btn bg-green-600 text-white hover:bg-green-400">
                        DashBoard
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogOut} className="btn bg-red-600 hover:bg-red-500 text-white">
                        LogOut
                      </button>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="text-4xl animate-pulse">
                <IoIosContact />
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-3 shadow">
                <div className="flex flex-col gap-3 p-4">
                  <li>
                    <NavLink className="btn btn-secondary" to="/login">
                      <p>Login</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="btn btn-primary" to="/register">
                      <p>Register</p>
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
