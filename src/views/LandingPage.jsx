import React, { useContext, useEffect, useState } from 'react'
import g from '../assets/img/g.png'
import ilustrarion from '../assets/img/finanza.png'

import { CircularProgress } from '@mui/material'
import { AuthContext } from '../context/AuthContext'

const LandingPage = () => {
  const [loading, setLoading] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const { login } = useContext(AuthContext)

  const handleLogin = async () => {
    try {
      setLoading(true)
      await login()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = g // Usar una de las imágenes para cargar

    imageLoader.onload = () => {
      // Todas las imágenes se han cargado
      setImagesLoaded(true)
    }
  }, [])

  const spinnerContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: !imagesLoaded ? '235px' : '0',
  }

  return (
    <>
      <section className="landing-total">
        <div className="wrapper">
          <h1>Lleva un track de todos tus gastos</h1>
          <div>
            {imagesLoaded ? (
              <img style={{ width: '230px', marginBottom: '2.5em' }} src={ilustrarion} alt="" />
            ) : (
              <div style={spinnerContainer}>
                <CircularProgress />
              </div>
            )}
          </div>
          <h3>Ingresa con tu cuenta de google</h3>
          <button disabled={loading} onClick={handleLogin}>
            <img src={g} alt="" />
            Accede con Google <span style={{ opacity: '0' }}>/</span> {loading ? <CircularProgress size={24} /> : ''}
          </button>
        </div>
      </section>
    </>
  )
}

export default LandingPage
