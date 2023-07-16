// we are making just for the reusablity 
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = ({ path = "login" }) => { // we are taking the path if path does not exits then we take path as login by default
  const [count, setCount] = useState(3); //making the initial count of spinner as 3
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);  // we are decreamenting the count from 3 to 1
    }, 1000);
    count === 0 && // if counting has been finished then redirect to the below path
      navigate(`/${path}`, {
        state: location.pathname, // this is for to redirect to the previous location
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);  // this is the dependency array
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
