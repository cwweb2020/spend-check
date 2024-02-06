import React, { useEffect, useState } from 'react'
import Card from './Card'
import { cardsIcons } from '../utils/cardsIcons'
import { CircularProgress, Divider } from '@mui/material'
import vision2 from '../assets/img/vision2.png'

const CardsContainer = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Simular carga de imágenes
  useEffect(() => {
    const imageLoader = new Image()
    imageLoader.src = vision2 // Usar una de las imágenes para cargar

    imageLoader.onload = () => {
      // Todas las imágenes se han cargado
      setImagesLoaded(true)
    }
  }, [])

  const contenedorEstilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //  minHeight: '-webkit-fill-available',
    width: !imagesLoaded ? 'unset' : '38%',
    minHeight: '262px',
  }

  return (
    <>
      <br />
      <br />
      <section className="total-card-container">
        <div className="card-card-container">
          <h3>Visión General </h3>
          <div className="wrapper-card-container">
            <div className="left-box">
              <div style={contenedorEstilo} className="imgcontainer">
                {imagesLoaded ? <img src={vision2} alt="" /> : <CircularProgress />}
                {/* <img src={vision} alt="" /> */}
              </div>
            </div>
            <div className="right-box">
              {cardsIcons.map((cardIcon) => (
                <Card key={cardIcon.id} icon={cardIcon.icon} title={cardIcon.title} total={cardIcon.total} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Divider style={{ width: '80%', margin: 'auto' }} />
    </>
  )
}

export default CardsContainer
