import { useState, useEffect } from "react";

export const useGetScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Agregar el evento de escucha para el cambio de tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El segundo argumento del useEffect vacío asegura que solo se suscriba/desuscriba en el montaje y desmontaje del componente

  return screenWidth;
};
