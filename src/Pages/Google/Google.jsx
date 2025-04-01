import { useContext } from 'react';
import google from './icons8-google-100.png'

import { useNavigate,useLocation } from 'react-router-dom';
// import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import PublicAxios from '../../Hook/PublicAxios/PublicAxios';
const Google = () => {
    const {Google}=useContext(AuthContext)
const axios = PublicAxios()
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";
const HandleGoole = ()=>{
    
    Google()
    .then(result=>{
        const userInfo= {
            email: result.user?.email,
            name:result.user?.displayName
        }
          axios.post('/users',userInfo)
          .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                      title: "Google login success",
                      icon: "success",
                      draggable: true
                    });
            }
              navigate(from)
          })

    })
}

    return (
        <div className='py-3'>
           <button onClick={HandleGoole} className="btn btn-block text-xl "><img className='h-10 ' src={google} alt="" /> Google </button>
        </div>
    );
};

export default Google;