import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imglogoing from './icons8-profile-picture.gif';
import logo from './logo.jpg';
import { AuthContext } from '../../Provider/Provider';
import Useadmin from '../../MainLayOut/useadmin';

const Navbar = () => {
  const { Singout, user } = useContext(AuthContext);
  const [admin]= Useadmin()
  const admindashbord = admin ? "/dashboard/admin_profile" : "/dashboard/my_profile"

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartment">Apartments</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
     
      <li>
        <NavLink to="/service">Service</NavLink>
      </li>
      <li>
        <NavLink to="/contack">Contack</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} className="h-16 w-16 rounded-full" alt="" />
            <a className="font-semibold md:text-xl">BUILDING MANAGEMENT</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-16 h-16 rounded-full">
                 <img src={user?.photoURL || imglogoing}  alt="" />
                 
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >

                
                <li>     
                  <NavLink to={admindashbord}>Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={Singout} className="px-4 py-2 text-center bg-sky-400 font-bold">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">
                <img src={imglogoing} alt="" />
                <h4>Login</h4>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
