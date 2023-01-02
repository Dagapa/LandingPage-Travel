import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';
import styles from './BtnFavoritos.modules.css';

const BtnFavoritos = () => {
  const [agregar, setAgregar] = useState(false);

  return (
    <div>
      <label>
        <input
          type='radio'
          name='rating'
          onClick={() => setAgregar(!agregar)}
        />
        <AiFillHeart
          size={20}
          className='btn'
          color={agregar ? '#54E38E' : '#e4e5e9'}
        />
      </label>
    </div>
  );
};

export default BtnFavoritos;
