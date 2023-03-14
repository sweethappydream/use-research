
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { login, register } from "../api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token")!== null);
  const [account, setAccount] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const signup = async (formData = {}) => {
    const result = await register(formData);
    setAccount(result.data);
    setToken(result.token);
    setIsLoggedIn(true);
  }

  const signin = async (formData = {}) =>{
    const result = await login(formData);
    setAccount(result.data);
    setToken(result.token);
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setAccount(null);
    setToken(null);
  };

  const getAccount = async () => {
    try {
      const {
        data: { data: accountData, token: accessToken },
      } = await axios.get("api/auth/getAccount", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setAccount(accountData);
      setToken(accessToken);
      setIsLoggedIn(true);
    } catch (error) {
      if (error?.response?.statusCode === 401) setToken(null);
    }
  };

  const changePassword = async (formData) => {
    try {
      await axios.post('api/auth/changePassword', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return 'success';
    } catch (error) {
      return (error)
    }
  }

  const changeAccount = async (formData) => {
    try {
      const response = await axios.post('api/auth/changeAccount', formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      setAccount(response.data.data);
      setToken(response.data.token);
      setIsLoggedIn(true);
      return response.data.message;
    } catch (error) {
      return (error);
    }
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (!isLoggedIn && !account && token)
      getAccount();
  }, [isLoggedIn, account, token]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        account,
        token,
        signup,
        signin,
        logout,
        changeAccount,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
