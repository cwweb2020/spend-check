import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Layout from "./layout/Layout";
import LandingPage from "../views/LandingPage";
import DataUserProvider from "../context/provider/DataUserProvider";

const MainRoutes = () => {
  return (
    <>
      <DataUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            {/* <Route index element={<LandingPage />} /> */}
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DataUserProvider>
    </>
  );
};

export default MainRoutes;
