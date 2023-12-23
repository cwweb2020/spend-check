import React, { useState } from "react";
import { createContext } from "react";

//

export const AuthContext = createContext();
//
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [auth, setAuth] = useState({
    user: null,
    isAuth: false,
  });
  //
  //
  return (
    <AuthContext.Provider value={{ token, auth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
