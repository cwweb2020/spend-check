import React from "react";
import DataUserProvider from "../context/provider/DataUserProvider";
import AuthProvider from "../context/AuthContext";
import AppRouter from "./AppRouter";

const MainRoutes = () => {
  return (
    <>
      <AuthProvider>
        <DataUserProvider>
          <AppRouter />
        </DataUserProvider>
      </AuthProvider>
    </>
  );
};

export default MainRoutes;
