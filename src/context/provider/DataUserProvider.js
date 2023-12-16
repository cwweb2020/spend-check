import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

const DataUserProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();

  const handleLoged = () => {
    setIsLoged(true);
    navigate("/home");
  };

  return (
    <DataContext.Provider value={{ isLoged, handleLoged }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataUserProvider;
