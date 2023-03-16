
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { socialVerify, login, register, verifyEmail } from "../api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [verifyToken, setVerifyToken] = useState(localStorage.getItem("verifyToken") || null);
  const [error,setError ] = useState("");

  const signup = async (formData = {}) => {
    try {
      const result = await register(formData, verifyToken);
      setAccount(result.data);
      setToken(result.token);
      setVerifyToken(null);
    } catch(e) {
      setError(e.message);
    }
  }

  const signin = async (formData = {}) =>{
    try{
      const result = await login(formData);
      setAccount(result.data);
      setToken(result.token);
    } catch(e) {
      setError(e.message);
    }
  }

  const verifyCode = async (formData = {}) => {
    try {
      const result = await verifyEmail(formData);
      setVerifyToken(result.verifyToken);
      return result;
    } catch(e) {
      setError(e.message);
      return e;
    }
  }

  const verifyWithSocial = async (data) => {
    try {
      const result = await socialVerify(data);
      setVerifyToken(result.verifyToken);
      return result;
    } catch(e) {
      setError(e.message);
      return e;
    }
  }

  const logout = () => {
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
    if (verifyToken) {
      localStorage.setItem("verifyToken", verifyToken);
    } else {
      localStorage.removeItem("verifyToken");
    }
  }, [verifyToken]);

  useEffect(() => {
    if (!account && token)
      getAccount();
  }, [account, token]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <AuthContext.Provider
      value={{
        account,
        token,
        verifyToken,
        error,
        signup,
        signin,
        logout,
        changeAccount,
        changePassword,
        verifyCode,
        verifyWithSocial
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
