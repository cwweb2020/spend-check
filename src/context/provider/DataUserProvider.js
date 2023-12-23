import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataUserProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //
  return (
    <DataContext.Provider value={{ handleClose, handleOpen, setOpen, open }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataUserProvider;
