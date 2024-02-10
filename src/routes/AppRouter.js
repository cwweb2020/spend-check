import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import SpendCheckRouter from './SpendCheckRouter'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <>
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
    </>
  )
}

export default AppRouter
