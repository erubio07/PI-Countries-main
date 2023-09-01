import { useContext, createContext, useState, useEffect } from "react";
import React from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../Redux/actions";
const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // console.log(isAuthenticated);
  const [userId, setUserId] = useState(null);
  // console.log(userId);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const decodedToken = jwt_decode(accessToken);
      setUserId(decodedToken.id);
      // console.log(decodedToken);
      const currentTime = Date.now() / 1000;
      // console.log(currentTime);

      if (decodedToken.exp < currentTime) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
          const refreshTokenOnserver = async () => {
            try {
              const data = await axios.post(
                "http://localhost:3001/refreshtoken",
                { refreshToken }
              );
              if (data.statusText === "OK") {
                const { accessToken: newAccessToken } = data;
                console.log(data);
                localStorage.setItem("accessToken", newAccessToken);
                setIsAuthenticated(true);
              } else {
                const errorData = data;
                console.log("Token refresh error:", errorData.message);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                setIsAuthenticated(false);
              }
            } catch (error) {
              console.error("Error during token refresh:", error);
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              setIsAuthenticated(false);
            }
          };
          refreshTokenOnserver();
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("name");

    setIsAuthenticated(false);
    setUserId(null);
    // dispatch(logOut());
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
