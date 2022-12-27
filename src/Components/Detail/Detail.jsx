import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cartelera from '../Cartelera/Cartelera.jsx';
import styles from './Detail.module.css';

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.getDetail(id));
  }, [id]);

  const detalle = useSelector((state) => {
    return state.detail;
  });

  console.log(detalle);

  return (
    <>
      <Cartelera screenshots={detalle?.screenshots} />
      <img src={detalle?.thumbnail} alt={detalle?.title} />
      <h1 className={styles.titulos}>{detalle?.title}</h1>

      <h3>{`Fecha de lanzamiento  ${detalle?.release_date}`}</h3>
      <button>{detalle?.genre}</button>
      <a href={detalle?.game_url}>Jugar</a>
      <h4>{`Desarrollador  ${detalle?.developer}`}</h4>
      <p>{detalle?.description}</p>

      <div>
        Requisitos del sistema:
        <div className='Procesador'>
          {`Procesador: ${detalle?.minimum_system_requirements.processor}`}
        </div>
        <div className='Graficos'>
          {`Graficos: ${detalle?.minimum_system_requirements.graphics}`}
        </div>
        <div className='RAM'>
          {`RAM: ${detalle?.minimum_system_requirements.memory}`}
        </div>
        <div className='Sistema'>{`Sistema: ${detalle?.minimum_system_requirements.os}`}</div>
        <div className='Memoria'>
          {`Memoria: ${detalle?.minimum_system_requirements.storage}`}
        </div>
      </div>
    </>
  );
}
