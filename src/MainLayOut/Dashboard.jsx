import { NavLink, Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import Useadmin from './useadmin';
import { CiMenuBurger } from 'react-icons/ci';


const Dashboard = () => {
  const [isAdmin,isAdminLoading]=Useadmin()

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
     
        <div className="lg:flex">
          {/* Sidebar */}
          <div className="lg:w-72 hidden lg:block w-60 min-h-screen  shadow-md">
            <div className="p-4 list-none space-y-2">
             
             {
              isAdmin ? 
<>

                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/admin_profile"
                    >
                      Admin Profile 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/manage_Members"
                    >
                      Manage Members
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/serviccePost"
                    >
                      Servicce Post
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? ' text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/make_announcement"
                    >
                      Make Announcement
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/agreement_requests"
                    >
                      Agreement Requests
                    </NavLink>
                  </li>
                 
                </>
              
</>
              : 

              (
                <>
                  <li>
                    <NavLink
                      to="/dashboard/my_profile"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/announcements"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                    >
                      Announcements
                    </NavLink>
                  </li>
                </>
              )
             }
              
            </div>
            <div className="divider"></div>
            <div className='list-none p-4'>
              <li>
                     <NavLink  className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }   to="/">Home</NavLink>
                   </li>
                   <li>
                     <NavLink   className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      } to="/apartment">Apartments</NavLink>
                   </li>
            </div>
          </div>

          
          <div className='lg:hidden shadow-xl  relative'>
  <details className="dropdown">
    <summary className="btn btn-info   m-1">
      <CiMenuBurger />
    </summary>
    <ul className="menu dropdown-content bg-base-100 rounded-box absolute top-full left-0 z-50 w-52 p-4 shadow-xl">
      <div className="p-2b  list-none space-y-2">
        {isAdmin ? (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
                to="/dashboard/admin_profile"
              >
                Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
                to="/dashboard/manage_Members"
              >
                Manage Members
              </NavLink>
            </li>
            <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'text-sky-400 font-bold' : ''
                        }`
                      }
                      to="/dashboard/serviccePost"
                    >
                      Servicce Post
                    </NavLink>
                  </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
                to="/dashboard/make_announcement"
              >
                Make Announcement
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block px-2 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
                to="/dashboard/agreement_requests"
              >
                Agreement Requests
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/dashboard/my_profile"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/announcements"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg ${
                    isActive ? ' text-sky-400 font-bold' : ''
                  }`
                }
              >
                Announcements
              </NavLink>
            </li>
          </>
        )}
      </div>
      <div className="divider"></div>
      <div className='list-none p-4'>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? ' text-sky-400 font-bold' : ''
              }`
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? 'text-sky-400  font-bold' : ''
              }`
            }
            to="/apartment"
          >
            Apartments
          </NavLink>
        </li>
      </div>
    </ul>
  </details>
</div>

          {/* Main Content */}
          <div className="flex-1 px-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
