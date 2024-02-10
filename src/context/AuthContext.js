import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithGoogle } from '../firebase/auth'
import { createItem } from '../firebase/controllers'
import { db } from '../firebase/auth'
//

export const AuthContext = createContext()
//
const AuthProvider = ({ children }) => {
  const [appToken, setAppToken] = useState(null)
  const [appUser, setAppUser] = useState(null)
  const navigate = useNavigate()

  const login = async () => {
    try {
      const user = await signInWithGoogle()
      const {
        displayName,
        email,
        uid,
        accessToken,
        metadata: { lastSignInTime },
      } = user

      setAppUser({ displayName, email, uid, lastSignInTime })
      setAppToken(accessToken)
      localStorage.setItem('user', JSON.stringify({ displayName, email, uid, lastSignInTime }))
      localStorage.setItem('accessToken', accessToken)

      // TODO: Revisar si el usuario ya existe en la base de datos de Firestore

      // Almacena en Firestore el ID del usuario
      const newUserID = await createItem(db, { displayName, email, lastSignInTime, uid }, 'users')

      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setAppToken(token)
    } else {
      setAppToken(null)
      navigate('/auth/login')
    }
  }, [])

  return <AuthContext.Provider value={{ appUser, setAppUser, appToken, login }}>{children}</AuthContext.Provider>
}

export default AuthProvider
