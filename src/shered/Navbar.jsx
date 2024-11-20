import { IoIosContact } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold gap-3"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Cap Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold gap-5">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-4xl m-1">
              <IoIosContact />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {/* button Part */}
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
              {/* dashBoard */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
