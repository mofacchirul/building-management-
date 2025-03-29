import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

 const Axioscreate = axios.create(
   {
    baseURL: 'http://localhost:4000',
    
   }
)
const SecureAxioc = () => {
  const {Singout}= useContext(AuthContext)
  const navigate = useNavigate()
  Axioscreate.interceptors.request.use(
    function (config){
     const token = localStorage.getItem("access-token");
  
    
    config.headers.authorization= `Bearer ${token}`
    
      return config;
    }, function (error) {
     
      return Promise.reject(error);
    }
  )

    // request interceptor to add authorization header for every secure call to teh api
  
    Axioscreate.interceptors.response.use(function (response) {
      
      return response;
    }, async (error)=> {
     console.log(error.response);
     
      const stutas = error.response.status;
      if(stutas === 401 || stutas === 403){
       
       await Singout(),
       navigate('/login')
      }
      return Promise.reject(error);
    });



    return Axioscreate
};

export default SecureAxioc;

