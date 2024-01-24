/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = async () => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Response", data);
        const receivedAuthToken = data.token;
        setAuthToken(receivedAuthToken);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login Failed");
      }
    } catch () {
      const errorData = await response.json();
      console.log("Error", errorData);
    }
  };

  const logout = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken,
        email,
        setEmail,
        password,
        setPassword,
        login,
        error,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
