import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext(); // here we create the context named AuthContext

const AuthProvider = ({ children }) => { //below we made the global state
  const [auth, setAuth] = useState({ // here we are creating the object
    user: null,
    token: "",
  });

  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token; // if we have a auth then put the token from auth into Authorization

  useEffect(() => {
    const data = localStorage.getItem("auth"); //we are taking the data from the local storage
    if (data) {
      const parseData = JSON.parse(data); // we are converting the string format data into json format
      setAuth({
        ...auth, // we are spreading it means keep the initial data as it is
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}> {/* we can use auth and setAuth anywhere */}
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext); // now we can use useAuth hook in any component

export { useAuth, AuthProvider };
