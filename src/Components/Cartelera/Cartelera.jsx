import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Cartelera.module.css';

export default function Cartelera(props) {
  // Estado para controlar la imagen actual
  const [currentScreenshot, setCurrentScreenshot] = useState(
    props.screenshots[0]
  );

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    // Índice de la captura de pantalla actual
    let currentScreenshotIndex = 0;

    const interval = setInterval(() => {
      // Incrementar el índice de la captura de pantalla actual
      currentScreenshotIndex++;

      // Si llegamos al final del array, volver al principio
      if (currentScreenshotIndex >= props.screenshots.length) {
        currentScreenshotIndex = 0;
      }

      // Cambiar la imagen actual en el estado
      setCurrentScreenshot(props.screenshots[currentScreenshotIndex]);
    }, 1800);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [props.screenshots]);

  // Mostrar la imagen actual
  return (
    <div className={styles.cartelera}>
      <img
        className={styles.imagenes}
        src={currentScreenshot && currentScreenshot.image}
        alt='Cartelera'
      />
    </div>
  );
}

Cartelera.propTypes = {
  screenshots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
