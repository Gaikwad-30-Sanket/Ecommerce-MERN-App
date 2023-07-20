import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../../styles/AuthStyles.css";
import "./login.scss";
import { useAuth } from "../../../context/auth"; //this is custom hook globally decleared with the help of contextAPI
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth(); // this is globally decleared use state using context API

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth, // we are keeping the previous values as it is and passing new user and token in global state
          user: res.data.user, // user and token is declared inside useAuth() global state and we are also getting from backend as a response
          token: res.data.token,
        });
        // local storage does not support JSON data for that we are converting it into string format 
        localStorage.setItem("auth", JSON.stringify(res.data)); // we are storing the current data into local storage, so that if we refresh the page our data should'nt be flushed
        navigate(location.state || "/"); // we are sending the current location or home page location
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <Layout title="Login - Gaikwad-Enterprises" >
      <div className="lf-super-wrapper">
        <div className="lf-main-wrapper">
          <div className="lf-inner" >
            <form onSubmit={handleSubmit}>
              <h4 className="lf-title">LOGIN</h4>

              <div className="lf-wrapper">
                <label for="">Email</label>
                <input
                  type="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="exampleInputEmail1"
                  // placeholder="Enter Your Email "
                  className="lf-input"

                />
              </div>
              <div className="lf-wrapper">
                <label for="">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="lf-input"
                  id="exampleInputPassword1"
                  // placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="lf-span-wrapper">
                <span
                  className="lf-span"
                  onClick={() => {
                    navigate("/forgot-password"); // by clicking the this we are redirecting to the forgot password page
                  }}
                >
                  Forgot Password?
                </span>
                <button type="submit" className="lf-btns">
                LOGIN
              </button>
              </div>

             
            </form>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default Login;
