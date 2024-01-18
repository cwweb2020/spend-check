// ScrollToTopOnMount.js

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScrollToTopOnMount = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = () => {
      window.scrollTo(0, 0);
    };

    // Asegúrate de que el efecto se ejecute al montar
    handleNavigation();

    // Agrega el efecto de navegación
    const unlisten = navigate(handleNavigation);

    if (typeof unlisten === 'function') {
      return () => {
        unlisten();
      };
    }
  }, [navigate]);

  return null;
};

export default ScrollToTopOnMount;
