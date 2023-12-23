import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import SpendCheckRouter from "./SpendCheckRouter";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="auth/*" element={<AuthRouter />} />
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <SpendCheckRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
