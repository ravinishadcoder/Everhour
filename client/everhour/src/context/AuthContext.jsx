import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth, setIsAuth] = useState(false);
  const [signUpData, setSignUpData] = useState([]);
  const [LoginData, setLoginData] = useState([]);
  axios.defaults.headers.post['Content-Type'] ='application/json';

  const navigate=useNavigate();

  /* const getSingUpInfo = () => {
    axios
      .get("https://json-server-test-ravinis.herokuapp.com/signupData")
      .then((res) => setSignUpData(res.data));
  }; */

  const  getSingUpInfo =  () => {
    return axios.get("https://json-server-test-ravinis.herokuapp.com/signupData");
  };
  /* const updateSignUpInfo = (info) => {
    axios
      .post("https://json-server-test-ravinis.herokuapp.com/signupData", info,{ headers: { 'Content-Type': 'application/json', }})
      .then((res) => setSignUpData([...signUpData, res.data]));
  }; */

  const updateSignUpInfo = (info) => {
    return axios.post("https://json-server-test-ravinis.herokuapp.com/signupData", info);
      
  };

  const handleLogin = () => {
    setIsAuth(true);
     navigate("/")
  };

  const handleLogOut = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    getSingUpInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUpData,
        getSingUpInfo,
        setSignUpData,
        updateSignUpInfo,
        handleLogin,
        handleLogOut,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
