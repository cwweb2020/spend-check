import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserLoginProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  //

  //

  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
};

export default UserLoginProvider;
