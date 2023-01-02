// * libreria encargada de validar los datos
import PropTypes from 'prop-types';

// * enviando a la ruta con su id
import { Link } from 'react-router-dom';

// & css
import './CardGame.css';

// imagenes
import imagen1 from '../../assets/svg/icon_one.png';
import imagen2 from '../../assets/svg/icon_two.png';
import imagen3 from '../../assets/svg/icon_three.png';

export default function CardGame({
  id,
  img,
  title,
  description,
  genre,
  position,
  ruta,
  open,
}) {
  const imgs = {
    1: imagen1,
    2: imagen2,
    3: imagen3,
  };

  return (
    <div key={id} data-aos='fade-right' className='cardContainer'>
      {position <= 3 && (
        <img
          src={imgs[position]}
          alt={title}
          className={open ? 'rakingMobile' : 'rakingDesktop'}
        />
      )}
      <Link to={`/detail/${id}`}>
        <img src={img} alt={title} />
      </Link>
      {ruta === '/games' ? (
        <div className='infoContainer'>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className='genreContainer'>
            <p>{genre}</p>
          </div>
        </div>
      ) : (
        <>
          <div className='infoContainerTop'>
            <h1>Rango #{position}</h1>
            <h1>{title}</h1>
            <div className='genreContainer'>
              <p>{genre}</p>
            </div>
          </div>
          {position > 3 && (
            <div className='positionMobile'>
              <p>#{position}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// * validando los datos que llegan por Props
CardGame.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  position: PropTypes.number,
  ruta: PropTypes.string.isRequired,
  open: PropTypes.bool,
};
