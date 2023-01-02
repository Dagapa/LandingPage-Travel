import styles from './GameRank.modules.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export default function GameRank() {
  const [rating, setRating] = useState(null);

  return (
    <div className='contenedor'>
      {[...Array(5)].map((star, index) => {
        const ratio = index + 1;

        return (
          <label key={index}>
            {' '}
            <input
              type='radio'
              name='rating'
              value={ratio}
              onClick={() => setRating(ratio)}
            />
            <FaStar
              key={index}
              size={20}
              color={ratio <= rating ? '#ffc107' : '#e4e5e9'}
              className='star'
            />{' '}
          </label>
        );
      })}
    </div>
  );
}
