import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Provider';
import Useadmin from '../MainLayOut/useadmin';



const Privateadmin = ({children}) => {
    const {loding,user}= useContext(AuthContext)
    const location = useLocation()
    const [userAdmin,isloding]=Useadmin()
    if(loding || isloding){
        return <div className='flex justify-between items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }


if(user && userAdmin){
    return children
}

    return <Navigate to="/login" state={{from : location}}  replace  ></Navigate> 
};

export default Privateadmin;