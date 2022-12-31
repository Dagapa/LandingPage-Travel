import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cartelera from '../Cartelera/Cartelera.jsx';
import styles from './Detail.module.css';
import Loading from '../Loading/Loading.jsx';
import Categories from '../Categories/Categories.jsx';
import GameRank from '../GameRank/GameRank.jsx';
import Opiniones from '../Opiniones/Opiniones.jsx';
import BtnFavoritos from '../BtnFavoritos/BtnFavoritos.jsx';

import { BsCpu } from 'react-icons/bs';
import { FaMemory } from 'react-icons/fa';
import { AiFillWindows } from 'react-icons/ai';
import { FiHardDrive } from 'react-icons/fi';
import { GiAbstract092, GiAbstract071, GiAbstract057 } from 'react-icons/gi';

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
    <div className={styles.contenedor}>
      <div className={styles.cartelera}>
        <Cartelera screenshots={detalle.screenshots} />
      </div>

      <div className={styles.foto}>
        <img
          src={detalle.thumbnail}
          alt={detalle.title}
          className={styles.fotoP}
        />
      </div>

      <div className={styles.titulo}>
        <h1>{detalle.title}</h1>
      </div>

      <div className={styles.lanzamiento}>
        <h3>{'Fecha de lanzamiento: '}</h3>
        <h3>{`${detalle.release_date}`}</h3>
      </div>

      <div className={styles.developer}>
        <div className={styles.gener}>
          <p className={styles.generes}>{detalle.genre}</p>
        </div>
        <h4>{`Desarrollador:   ${detalle.developer}`}</h4>
      </div>

      <div className={styles.botonJugar}>
        <a href={detalle.game_url}>
          <button>Jugar</button>
        </a>
      </div>
      <div className={styles.estrellas}>
        <GameRank />
        <BtnFavoritos />
      </div>

      <div className={styles.opiniones}>
        <Opiniones coment={6} fav={610} ratio={'18%'} numRatio={61} />
      </div>

      <div className={styles.descripcion}>
        <p>{detalle.description}</p>
      </div>

      <div className={styles.sistema}>
        Requisitos del sistema:
        <div className='Procesador'>
          <BsCpu size={25} />
          {`Procesador: ${detalle.minimum_system_requirements.processor}`}
        </div>
        <div className='Graficos'>
          <GiAbstract071 size={25} />
          {`Graficos: ${detalle.minimum_system_requirements.graphics}`}
        </div>
        <div className='RAM'>
          <FaMemory size={25} />
          {`RAM: ${detalle.minimum_system_requirements.memory}`}
        </div>
        <div className='Sistema'>
          <AiFillWindows size={25} />
          {`Sistema: ${detalle.minimum_system_requirements.os}`}
        </div>
        <div className='Memoria'>
          <FiHardDrive size={25} />
          {`Memoria: ${detalle.minimum_system_requirements.storage}`}
        </div>
      </div>
    </div>
  );
}
