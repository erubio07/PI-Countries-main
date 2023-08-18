import { useContext, createContext, useState, useEffect } from "react";
import React from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = createContext({
  isAuthenticated: false,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [userFetched, setUserFetched] = useState(false);

  console.log(user);
  console.log(userId);
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
                refreshToken
              );
              if (data.statusText === "OK") {
                const { accessToken: newAccessToken } = await data.json();
                localStorage.setItem("accessToken", newAccessToken);
                setIsAuthenticated(true);
              } else {
                const errorData = await data.json();
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
  }, [userId]);

  useEffect(() => {
    const fetchUserInfo = async (id) => {
      console.log("userId:", userId);
      if (userId) {
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        console.log(response.data.name);
        setUser(response.data.name);
        setUserFetched(true);
      }
    };
    if (!userFetched) {
      fetchUserInfo(userId);
    }
  }, [userId, userFetched]);

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
