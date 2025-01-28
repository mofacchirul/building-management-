import React, { useContext, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottio/Animation - 1736701431793.json';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useRef } from 'react';
import { useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../Google/Google';
const Login = () => {
const {Login}=useContext(AuthContext);
const chaptcha=useRef();
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/"
const [disabled,setdisabled]=useState(true)
const [view,setview]=useState(true);
const HandleLogin = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  
  Login(email, password)
      .then((result) => {
          Swal.fire({
              title: "Login successful",
              icon: "success",
              draggable: true,
          });

          navigate(from);

   
      })
      .catch((error) => {
          Swal.fire({
              title: "Login failed",
              text: "Invalid email or password. Please try again.",
              icon: "error",
              confirmButtonText: "OK",
          });
      });
};


useEffect(()=>{
    loadCaptchaEnginge(6); 
},[])


const HandleCapthcar =()=>{
const userchaptcha = chaptcha.current.value;
if(validateCaptcha(userchaptcha)){
    setdisabled(false)
}
else{
    setdisabled(true)
}
}





  return (
    <div className="flex flex-col py-10 lg:flex-row-reverse items-center justify-center min-h-screen bg-gray-100">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Lottie animationData={animationData} className="" />
      </div>

      {/* Login Form */}
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl p-6">
        <div>
           <h1 className='font-bold text-xl text-center lg:text-5xl '> Login Now!</h1>
        </div>
        <form className="card-body" onSubmit={HandleLogin}>
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={view ? "password"  : "text"}  
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
           <div>
            <button className='absolute -mt-8 ml-[15rem] ' onClick={()=>setview(!view)}> {view  ? <FaRegEyeSlash /> :  <FaEye />  } </button>
           </div>
          </div>


          <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input
             onBlur={HandleCapthcar}
             ref={chaptcha}
              type="text"
              name="catchar"
              placeholder=" Validate "
              className="input input-bordered"
              required
            />
          
          </div>

          {/* Login Button */}
          <div className="form-control mt-6">
            <button disabled={false} className="btn btn-primary">Login</button>
          </div>
        </form>
       
              <div>
                      <h3 className='text-xl text-info font-semibold'>Create your accountt</h3>
                      <p>Have an account? <Link to="/signup" className='underline text-info'>Resistar in now</Link></p>
                    </div>

                  <Google></Google>
      </div>
    </div>
  );
};

export default Login;
