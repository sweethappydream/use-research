import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = () => {
  let location = useLocation();
  const { token, logOut } = useAuth()

  useEffect(() => {

    if (token) {
      const decodedJwt = parseJwt(token);

      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut();
      }
    }
  }, [location, logOut, token]);

  return ;
};

export default AuthVerify;