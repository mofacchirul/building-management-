import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayOut/MainLayOut';
import Home from './Pages/Home/Home/Home';


// tanstack react query

import { QueryClient, QueryClientProvider} from 'react-query'
import Login from './Pages/Login/Login';
import Provider from './Provider/Provider';

import ViewDetels from './Pages/Home/Banner2/ViewDetels';
import Apartment from './Pages/Apartment/Apartment';




import My_Profile from './Pages/My_Profile/My_Profile';
import Agreement from './Pages/Agreement/Agreement';
import Announcements from './Pages/Announcements/Announcements';
import Dashboard from './MainLayOut/Dashboard';
import MakePayment from './Pages/MakePayment/MakePayment';
import Membar_Profile from './Pages/Membar_Profile/Membar_Profile';
import Payment from './Pages/Payment/Payment';
import Paymenthistory from './Pages/Payment/Paymenthistory';
// import Manage_Coupons from './Pages/Admin/Manage_Coupons/Manage_Coupons';
import Make_Announcement from './Pages/Admin/Make_Announcement/Make_Announcement';
import Agreement_Requests from './Pages/Admin/Agreement_Requests/Agreement_Requests';
import Manage_Members from './Pages/Admin/Manage_Members/Manage_Members';
import Singup from './Pages/SIngup/Singup';
import Private from './Provider/Private';
import Privateadmin from './Provider/PrivateAdmin';
import Admin_Profile from './Pages/Admin/Admin_Profile/Admin_Profile';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/viewdetels/:id",
        element: <Private>
          <ViewDetels />
        </Private>,
        loader: ({ params }) =>
          fetch(`https://assignment-12-serside.vercel.app/banner/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Singup></Singup>
      },
      {
        path: "/apartment",
        element: <Apartment />
      },
      {
        path: "/agreement/:id",
        element:<Private>
           <Agreement />
        </Private>,
        loader: ({ params }) =>
          fetch(`https://assignment-12-serside.vercel.app/apartment/${params.id}`)
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Private>
      <Dashboard />
    </Private>,
    children: [
      {
        path: "my_profile",
        element: <Private>
          <My_Profile />
        </Private>
      },
      {
        path: "announcements",
        element: <Private>
          <Announcements />
        </Private>
      },
      {
        path: "makepayment",
        element: <Private>
          <MakePayment />
        </Private>
      },
      {
        path:'membarprofile',
        element:<Private>
          <Membar_Profile></Membar_Profile>
        </Private>
      },

      {
        path:'payment',
        element:<Private>
          <Payment></Payment>
        </Private>
      },
      {
        path:'paymenthistory',
        element:<Private>
          <Paymenthistory></Paymenthistory>
        </Private>
      },



      //  admin componets
      {
path:'admin_profile',
element:<Privateadmin>
  <Admin_Profile></Admin_Profile>
</Privateadmin>
      },

    {
      path:'manage_Members',
      element:<Privateadmin>
        <Manage_Members></Manage_Members>
      </Privateadmin>
    },
    {
      path:'make_announcement',
      element:<Privateadmin>
        <Make_Announcement></Make_Announcement>
      </Privateadmin>
    },
    {
      path:'agreement_requests',
      element:<Privateadmin>
        <Agreement_Requests></Agreement_Requests>
      </Privateadmin>
    },
    // {
    //   path:'manage_coupons',
    //   element:<Manage_Coupons></Manage_Coupons>
    // }




    ]
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
   <Provider>
   <RouterProvider router={router} />
   </Provider>
    </QueryClientProvider>

  </StrictMode>,
)
