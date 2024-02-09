import React, { useState } from 'react'
import { createContext } from 'react'

//

export const AuthContext = createContext()
//
const AuthProvider = ({ children }) => {
  const token = localStorage.getItem('token') || null
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)

  React.useEffect(() => {
    setAccessToken(token)
    // console.log(token, 'token')
  }, [token])

  return <AuthContext.Provider value={{ user, setUser, accessToken }}>{children}</AuthContext.Provider>
}

export default AuthProvider
