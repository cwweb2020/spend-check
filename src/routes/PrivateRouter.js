import React from "react";

const PrivateRouter = ({ children }) => {
  const isAuth = true;

  //
  return isAuth ? children : <div>Not Auth</div>;
};

export default PrivateRouter;
