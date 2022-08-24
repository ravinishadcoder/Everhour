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
  const navigate=useNavigate()
  const getSingUpInfo = () => {
    axios
      .get("https://json-server-test-ravinis.herokuapp.com/signupData")
      .then((res) => setSignUpData(res.data));
  };
  const updateSignUpInfo = (info) => {
    axios
      .post("https://json-server-test-ravinis.herokuapp.com/signupData", info)
      .then((res) => setSignUpData([...signUpData, res.data]));
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
