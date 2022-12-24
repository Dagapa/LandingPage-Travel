// * libreria encargada de validar los datos
import PropTypes from 'prop-types';

// & css
import './CardGame.css';

export default function CardGame({ id, img, title, description, genre }) {
  return (
    <div key={id} data-aos='fade-right' className='cardContainer'>
      <img src={img} alt={title} />
      <div className='infoContainer'>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className='genreContainer'>
          <p>{genre}</p>
        </div>
      </div>
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
};
