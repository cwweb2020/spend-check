import React, { useEffect, useState } from 'react'
import house from '../assets/icons/house.svg'
import { useNavigate } from 'react-router-dom'
import person from '../assets/icons/person-svgrepo-com.svg'
import LanguageSelector from './material-icons/LanguageSelector'
import { useGetScreenWidth } from '../hooks/useGetScreenWidth'
import { logout } from '../firebase/auth'

const Header = () => {
  const nameLocalStorage = localStorage.getItem('user')
  const userObject = JSON.parse(nameLocalStorage)
  const [name, setName] = useState(null)
  const navigate = useNavigate()
  //

  const redirectToHome = () => {
    navigate('/')
  }
  //
  const screenWidth = useGetScreenWidth()
  const langTitle = screenWidth < 900 ? 'Lang' : 'Language'

  //

  const handleLogOut = async () => {
    try {
      await logout()
      setName('')
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      navigate('/auth/login')
    } catch (error) {}
  }

  useEffect(() => {
    if (userObject) {
      const firstName = userObject.displayName.split(' ')
      setName(`${firstName[0]} `)
    }
  }, [])

  return (
    <>
      <section style={screenWidth < 900 ? mobileStyleForHeader : {}} className="total-header">
        <div className="header-wrapper">
          <div onClick={redirectToHome} className="home">
            <img src={house} alt="" />
          </div>
          <div className="person">
            <LanguageSelector langTitle={langTitle} screenWidth={screenWidth} />
            <img
              //  style={{ width: "40px", height: "40px" }}
              src={person}
              alt=""
            />
            <h3>{name}</h3>/
            <h4 onClick={handleLogOut} style={exit}>
              Salir
            </h4>
          </div>
        </div>
      </section>
    </>
  )
}

const exit = {
  color: '#ff0000',
  cursor: 'pointer',
  fontSize: '1.06em',
}

var mobileStyleForHeader = {
  position: 'fixed',
  width: '100%',
  bottom: '0',
  background: 'lightblue',
  fontSize: '13px',
  zIndex: '100',
}

export default Header
