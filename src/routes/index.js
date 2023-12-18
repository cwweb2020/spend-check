import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import LandingPage from "../views/LandingPage";
import DataUserProvider from "../context/provider/DataUserProvider";
import PrivateRoute from "../components/PrivateRoute";
import Incomings from "../views/Incomings";
import Expenses from "../views/Expenses";
import Layout from "./Layout";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <DataUserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path="ingresos" element={<Incomings />} />
              <Route path="gastos" element={<Expenses />} />
              <Route
                path="dashboard"
                element={
                  <PrivateRoute redirect="/" component={<Dashboard />} />
                }
              />
            </Route>
          </Routes>
        </DataUserProvider>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
