import React from 'react';
import NotAuthotized from '../views/NotAuthotized';

const PrivateRouter = ({ children }) => {
  const isAuth = true;

  //
  return isAuth ? children : <NotAuthotized />;
};

export default PrivateRouter;
