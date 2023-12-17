import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Layout from "./layout/Layout";
import LandingPage from "../views/LandingPage";
import DataUserProvider from "../context/provider/DataUserProvider";
import PrivateRoute from "../components/PrivateRoute";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <DataUserProvider>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index element={<LandingPage />} />
            {/* <Route index element={<Home />} /> */}
            <Route
              path="dashboard"
              element={<PrivateRoute redirect="/" component={<Dashboard />} />}
            />
          </Routes>
        </DataUserProvider>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
