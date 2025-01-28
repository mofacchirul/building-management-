

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Provider';
import { useContext } from 'react';

const Private = ({children}) => {
    const {loding,user}= useContext(AuthContext)
    const location = useLocation()
    if(loding){
        return <div className='flex justify-between items-center'>
            <progress className="progress w-56"></progress>
        </div>
    }


if(user){
    return children
}

    return <Navigate to="/login" state={{from : location}}  replace  ></Navigate>
};

export default Private;