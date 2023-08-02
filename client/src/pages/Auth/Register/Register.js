import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout/Layout";
import axios from "axios"; // this is for the send and receive the network request
import { useNavigate } from "react-router-dom"; // with the help of it we can navigate
import toast from "react-hot-toast";
// import "../../../styles/AuthStyles.css";
import "./register.scss"
// import "../Login/login.scss"
const Register = () => {
  const [name, setName] = useState(""); //we are keeping initial value as empty
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => { // 'e' is the event all the input data is inside this 'e'
    e.preventDefault(); // by this if we submit the form page will not be refreshed
    try {
      const res = await axios.post("/api/v1/auth/register", {  //res we are getting from the backend // path before of this url is added into the package.json as a proxy
        name, // we are sending these values with the help of axios, and in backend we will access it with the help of req.body
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {  //if we get success then this will run  // success is defined in the backend // we access backend's response with the help of data
        toast.success(res.data && res.data.message);  // toast is library tool //we are showing the massage which is written in backend
        navigate("/login"); // if we get successfully registered then we redirect to the login page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Gaikwad-Enterprises">
    <div className="lf-super-wrapper">
        <div className="lf-main-wrapper">
      <div className="lf-inner" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}> {/* when we submit the form handleSubmit function will run  */}
          <h4 className="lf-title">Register Now</h4>
          <div className="lf-wrapper">
            <input
              type="text"
              value={name} // this value is state value and this will be showed in output bar
              onChange={(e) => setName(e.target.value)} // input value we are saving in the usestate
              className=""
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required // input is required(this is for client side validation)
              autoFocus
            />
          </div>
          <div className="lf-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=""
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="lf-wrapper">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=""
              id="exampleInputPassword1"
              placeholder="Create the password"
              required
            />
          </div>
          <div className="lf-wrapper">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=""
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="lf-wrapper">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className=""
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="lf-wrapper">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className=""
              id="exampleInputEmail1"
              placeholder="What is your Favorait teacher name"
              required
            />
          </div>
          <button type="submit" className="xlf-btns ">
            REGISTER
          </button>
        </form>
      </div>
      </div>
      </div>
    </Layout>
  );
};

export default Register;
