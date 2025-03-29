import React, { useContext, useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../lottio/Animation - 1736701431793.json';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../Google/Google';

const Login = () => {
  const { Login } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Manage email & password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [view, setView] = useState(true);



  const HandleLogin = (e) => {
    e.preventDefault();
    
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

  

  // Autofill email & password when clicking Admin button
  const handleAdminLogin = (adminEmail, adminPassword) => {
    setEmail(adminEmail);
    setPassword(adminPassword);
  };

  return (
    <div className="flex flex-col py-10 lg:flex-row-reverse items-center justify-center min-h-screen ">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Lottie animationData={animationData} />
      </div>

      {/* Login Form */}
      <div className="card w-full max-w-sm shrink-0 shadow-2xl p-6">
        <h1 className='font-bold text-xl text-center text-sky-500 lg:text-4xl'>Login Now!</h1>

        {/* Admin Buttons for Autofill */}
     

        <form className="card-body" onSubmit={HandleLogin}>
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email} // Autofill email
              onChange={(e) => setEmail(e.target.value)}
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
              type={view ? "password" : "text"}
              name="password"
              value={password} // Autofill password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              className='absolute mt-12 ml-[15rem]'
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaEye />}
            </button>
          </div>

         
          

          {/* Login Button */}
          <div className="form-control mt-6">
            <button className="btn btn-info text-white hover:text-black">Login</button>
          </div>
        </form>

        <div>
          <h3 className='text-xl  font-semibold'>Create your account</h3>
          <p>
            Have an account? <Link to="/signup" className='underline text-info'>Register now</Link>
          </p>
        </div>

        <Google />
      </div>
    </div>
  );
};

export default Login;
