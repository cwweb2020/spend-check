import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataUserProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  // saving first 4 elements of the array
  const [firstFours, setFirstFours] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //
  return (
    <DataContext.Provider
      value={{
        handleClose,
        handleOpen,
        setOpen,
        open,
        setFirstFours,
        firstFours,
        // name,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataUserProvider;
