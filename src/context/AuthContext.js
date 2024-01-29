import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

//

export const AuthContext = createContext();
//
const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
