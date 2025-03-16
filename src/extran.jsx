import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleButtonClick = (email, password) => {
    setLoginData({ email, password });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = loginData.email;
    const password = loginData.password;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.warn(error.message);
      });
  };

  return (
    <div className="mt-20 p-4">
      <div className="p-4 card lg:w-5/12 mx-auto border backdrop-blur-md">
        <h2 className="text-3xl mb-4 text-center font-bold">Welcome Back to Login</h2>
        <div className="flex gap-5 justify-around">
          <button
            className="btn-sm bg-green-300 rounded-sm gap-3"
            onClick={() => handleButtonClick("admin@example.com", "admin123")}
          >
            Admin
          </button>
          <button
            className="btn-sm bg-green-300 rounded-sm gap-3"
            onClick={() => handleButtonClick("user@example.com", "user123")}
          >
            User
          </button>
          <button
            className="btn-sm bg-green-300 rounded-sm gap-3"
            onClick={() => handleButtonClick("guest@example.com", "guest123")}
          >
            Guest
          </button>
        </div>
        <form onSubmit={handleSubmit} className="md:p-4 w-full">
          {/* Email */}
          <div className="form-control">
            <label className="label font-semibold">Email :</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label font-semibold">Password :</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn mt-5 text-white bg-green-400 w-full">
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <p>
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-green-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;