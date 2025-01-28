import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import imglogoing from './icons8-profile-picture.gif';
import logo from './logo.jpg';
import { AuthContext } from '../../Provider/Provider';

const Navbar = () => {
  const { Singout, user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apartment">Apartments</NavLink>
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
                  <img src={user?.photoURL} className="w-14 h-14 mx-auto rounded-full"  alt="h" />
                 
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                 <h1 className=" font-bold text-yellow-500 text-xl">{user?.displayName}</h1>
                <li>     
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                  <button onClick={Singout} className="btn btn-error">
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
