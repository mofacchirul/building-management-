import React from 'react';
import Navber from '../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const MainLayOut = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            

        </div>
    );
};

export default MainLayOut;