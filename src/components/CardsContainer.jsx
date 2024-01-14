import React, { useEffect, useState } from 'react';
import Card from './Card';
import vision from '../assets/img/vision.svg';

import { cardsIcons } from '../utils/cardsIcons';
import { Skeleton } from '@mui/material';

const CardsContainer = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Simular carga de imágenes
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = vision; // Usar una de las imágenes para cargar

    imageLoader.onload = () => {
      // Todas las imágenes se han cargado
      setImagesLoaded(true);
    };
  }, []);

  //

  //
  return (
    <>
      <br />
      <br />
      <section className="total-card-container">
        <div className="card-card-container">
          <h3>Visión General </h3>
          <div className="wrapper-card-container">
            <div className="left-box">
              <div className="imgcontainer">
                {imagesLoaded ? <img src={vision} alt="" /> : <Skeleton variant="rectangular" width={260} height={260} />}
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
    </>
  );
};

export default CardsContainer;
