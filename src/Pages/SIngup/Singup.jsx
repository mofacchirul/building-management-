import React, { useContext, useState } from 'react';
import resistancce from '../../lottio/resistance.json';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import Google from '../Google/Google';
import PublicAxios from '../../Hook/PublicAxios/PublicAxios';


const Singup = () => {
  const {Resistacesing,UpdateProfile} = useContext(AuthContext)
  const axios = PublicAxios()
  const { reset } = useForm();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [view, setView] = useState(true);

  const onSubmit = (data) => {
    console.log(data); 
        Resistacesing(data.email,data.password)
    .then(result=>{  
      const userInfo = {
        displayName: data.name,
        photoURL: data.photoURL,
        email: data.email,
      };
      axios.post('/users',userInfo)
      Swal.fire({
        title: "SingUp success",
        icon: "success",
        draggable: true
      });
      UpdateProfile(userInfo)
      navigate('/')
      reset()
    .then(()=>{
    })
    .catch(error=>{
      Swal.fire({
        title: "Error",
        text: "Could not update profile.",
        icon: "error",
      })
    })
     
   

    })
    .catch(error=>{
    
    })
  };

  return (
    <div className=' '>
      <h1 className="lg:text-5xl text-2xl text-center font-bold ">Resistance now!</h1>
      <div className="hero">
        <div className="hero-content flex-col my-7 gap-5 items-center lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={resistancce}></Lottie>
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo </span>
                </label>
                <input
  type="text"
  {...register("photoURL", { required: true })}
  placeholder="Photo URL"
  className="input input-bordered"
/>
{errors?.photoURL && <p className="text-red-500">Photo URL is required.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="User  Name"
                  className="input input-bordered"
                />
                {errors?.name && <p className="text-red-500">Name is required.</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && <p className="text-red-500">Email is required.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={view ? "password" : "text"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                 {errors.password?.type === 'required' && 
                  <p className="text-red-500">
                    Password is required
                  </p>
                }
                 {errors.password?.type === 'minLength' && 
                  <p className="text-red-500">
                    Password is required and must be 6 characters long.
                  </p>
                }
                 {errors.password?.type === 'maxLength' && 
                  <p className="text-red-500">
                    Password is required and must be less 20 characters  long.
                  </p>
                }
                {errors.password?.type === 'pattern' && 
                  <p className="text-red-500">
                    Password is required and must be 6-20 characters long.
                  </p>
                }
                <button
                  type="button"
                  className="absolute mt-12 ml-[18rem]"
                  onClick={() => setView(!view)}
                >
                  {view ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block btn-info text-white text-2xl font-bold">
                  Resistance
                </button>
              </div>
              <div>
                <h3 className="text-xl  font-semibold">
                  Create your account
                </h3>
                <p>
                  Have an account?{" "}
                  <Link to="/login" className="underline text-info">
                    Log in now
                  </Link>
                </p>
             <Google></Google>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;

   
