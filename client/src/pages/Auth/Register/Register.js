import React, { useState } from "react";
import Layout from "../../../components/Layout/Layout/Layout";
import axios from "axios"; // this is for the send and receive the network request
import { useNavigate } from "react-router-dom"; // with the help of it we can navigate
import toast from "react-hot-toast";
import "../../../styles/AuthStyles.css";
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
      const res = await axios.post("/api/v1/auth/register", {  //res we are getting form the backend
        name, // we are sending these values with the help of axios
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {  //if we get success then this will run  // success is defined in the backend
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
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}> {/* when we submit the form handleSubmit function will run  */}
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)} // input value we are saving in the usestate
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required // this is for to show input is required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is your Favorait teacher name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
