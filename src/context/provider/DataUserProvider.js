import React, { createContext } from "react";

export const DataContext = createContext();

const DataUserProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataUserProvider;
