import { useState } from 'react';
import Categories from '../Categories/Categories';
import Styles from './SearchBar.module.css';
import { useSelector, useDispatch} from 'react-redux';
import * as actions from '../../Redux/actions/actions';


const placeholder = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", "top-down", "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"];

export default function SearchBar() {

  const [Desplegado, setDesplegado] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch()

  const Desplegar = () => {
    if (Desplegado === false) {
      setDesplegado(true);
    } else {
      setDesplegado(false);
    }
  };
  const estado = useSelector((state)=>state.games)
  const Buscar =()=>{
    const encontrados= []
    
    estado.forEach((element) => {
      if (element.title.toLowerCase().includes(input)){
        encontrados.push(element)
      }
    });
    if (encontrados.length===0) {
      alert("No se enecontraron juegos")
    }else{
      dispatch(actions.renderGames(encontrados))
    }
    setInput("")
  };

  return (
    <div className={Styles.Contenedor}>
      <div className={Styles.Categories}>
        <button onClick={Desplegar} className={Styles.Categoria}>
          Categoria
        </button>
        <div className={Styles.Search}>
          <input
            className={Styles.input}
            type='search'
            value={input}
            placeholder='Buscar Juegos...'
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <button className={Styles.buscar} onClick={Buscar}>
            <img
              className={Styles.lupa}
              src='https://cdn-icons-png.flaticon.com/512/49/49116.png'
              alt=''
            />
          </button>
        </div>
      </div>
      {Desplegado && <Categories cartas={placeholder} />}
    </div>
  );
}
