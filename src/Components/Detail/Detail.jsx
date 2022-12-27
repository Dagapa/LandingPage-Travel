import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cartelera from '../Cartelera/Cartelera.jsx';
import styles from './Detail.module.css';
import Loading from '../Loading/Loading.jsx';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const detalle = useSelector((state) => {
    return state.detail;
  });
  useEffect(() => {
    if (!detalle) dispatch(actions.getDetail(id));
    if (detalle?.screenshots) {
      setFuturaInfo(false);
    }
  }, [id, detalle]);

  const [futuraInfo, setFuturaInfo] = useState(true);

  if (futuraInfo === true) return <Loading />;

  return (
    <div className={styles.parent}>
      <div className={styles.cartelera}>
        <Cartelera screenshots={detalle.screenshots} />
      </div>

      <div className={styles.foto}>
        <img src={detalle.thumbnail} alt={detalle.title} />
      </div>

      <div className={styles.titulo}>
        <h1>{detalle.title}</h1>
      </div>

      <div className={styles.div5}>
        <h3>{`Fecha de lanzamiento  ${detalle.release_date}`}</h3>
      </div>

      <div className={styles.div8}>
        <button>{detalle.genre}</button>
        <h4>{`Desarrollador  ${detalle.developer}`}</h4>
      </div>

      <div className={styles.botonJugar}>
        <a href={detalle.game_url}>Jugar</a>
      </div>

      <div className={styles.descripcion}>
        <p>{detalle.description}</p>
      </div>

      <div className={styles.sistema}>
        Requisitos del sistema:
        <div className='Procesador'>
          {`Procesador: ${detalle.minimum_system_requirements.processor}`}
        </div>
        <div className='Graficos'>
          {`Graficos: ${detalle.minimum_system_requirements.graphics}`}
        </div>
        <div className='RAM'>
          {`RAM: ${detalle.minimum_system_requirements.memory}`}
        </div>
        <div className='Sistema'>{`Sistema: ${detalle.minimum_system_requirements.os}`}</div>
        <div className='Memoria'>
          {`Memoria: ${detalle.minimum_system_requirements.storage}`}
        </div>
      </div>
    </div>
  );
}
