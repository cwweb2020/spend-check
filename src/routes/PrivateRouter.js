import React from 'react'
import NotAuthotized from '../views/NotAuthotized'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = ({ children }) => {
  const { accessToken } = React.useContext(AuthContext)
  // console.log(accessToken, 'accessToken')
  const isAuth = accessToken ? true : false
  // const isAuth = !!accessToken
  // console.log(isAuth, 'isAuth')

  //
  return isAuth ? children : <NotAuthotized />
}

export default PrivateRouter
