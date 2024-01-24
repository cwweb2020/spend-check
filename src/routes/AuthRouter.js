import React from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from '../views/LandingPage';

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
