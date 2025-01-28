import { NavLink, Outlet } from 'react-router-dom';
import Navber from '../Shared/Navber/Navber';
import Useadmin from './useadmin';


const Dashboard = () => {
  const [isAdmin,isAdminLoading]=Useadmin()

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Navber />
        <div className="flex">
          {/* Sidebar */}
          <div className="lg:w-72 w-60 min-h-screen bg-gray-100 shadow-md">
            <div className="p-4 list-none space-y-2">
             
             {
              isAdmin ? 
<>

                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
                      to="/dashboard/myprofile"
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-lg ${
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
                          isActive ? 'bg-blue-100 font-bold' : 'hover:bg-gray-200'
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
