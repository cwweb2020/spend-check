import { useState, useEffect } from "react";

const useImageLoader = (imageUrl) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = imageUrl;

    imageLoader.onload = () => {
      // La imagen se ha cargado
      setImageLoaded(true);
    };

    // Limpieza del efecto
    return () => {
      imageLoader.onload = null;
    };
  }, [imageUrl]);

  return imageLoaded;
};

export default useImageLoader;
