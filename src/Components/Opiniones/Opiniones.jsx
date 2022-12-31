import PropTypes from 'prop-types';

const Opiniones = ({ coment, fav, ratio, numRatio }) => {
  return (
    <div className='contenedor'>
      <span className='comentarios'>{`Comentarios: ${coment}\n`}</span>
      <br />
      <span className='favoritos'>{`Favoritos: ${fav}\n`}</span>
      <br />
      <span className='popularidad'>{`Popularidad: ${ratio} \n`}</span>
      <br />
      <span className='clasificaciones'>
        {`Calificaciones: ${numRatio} \n`}{' '}
      </span>
    </div>
  );
};

Opiniones.propTypes = {
  coment: PropTypes.number,
  fav: PropTypes.number,
  ratio: PropTypes.string.isRequired,
  numRatio: PropTypes.number,
};

export default Opiniones;
