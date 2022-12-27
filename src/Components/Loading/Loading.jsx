import { useEffect } from 'react';
import anime from 'animejs';
import './Loading.css';

export default function Loading() {
  useEffect(() => {
    anime({
      targets: '.box',
      width: [20, 120],
      easing: 'easeOutElastic(1, .8)',
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className='loadingContainer'>
      <h1>Loading</h1>
      <div className='box'>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
    </div>
  );
}
