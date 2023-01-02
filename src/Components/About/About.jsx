import './About.css';

import avatar1 from '../../assets/svg/duvan.png';
import avatar2 from '../../assets/svg/cristian.png';
import avatar3 from '../../assets/svg/miguel.png';
import avatar4 from '../../assets/svg/losuponia.png';

import icon1 from '../../assets/svg/git.png';
import icon2 from '../../assets/svg/linkeind.png';
import icon3 from '../../assets/svg/gmail.png';

import wallpaper1 from '../../assets/svg/React-icon.svg.png';

export default function About() {
  const programadores = [
    {
      nombre: 'Duvan Rozo',
      titulo: 'Fullstack Developer',
      img: avatar1,
    },
    {
      nombre: 'Miguel Angel Gallego',
      titulo: 'Fullstack Developer',
      img: avatar2,
    },
    {
      nombre: 'Cristian Velarde',
      titulo: 'Fullstack Developer',
      img: avatar3,
    },
    {
      nombre: 'David Esteban Gallego',
      titulo: 'Fullstack Developer',
      img: avatar4,
    },
  ];
  return (
    <>
      <div className='presentation'>
        <img src={wallpaper1} />
      </div>
      <div className='contenedorInfo'>
        {programadores.map((data) => {
          return (
            <>
              <div className='cardProgramador'>
                <img
                  className='imgaProgramador'
                  src={data.img}
                  alt={data.nombre}
                />
                <h1>{data.titulo}</h1>
                <h2>{data.nombre}</h2>
                <div className='redes'>
                  <img src={icon2} alt='linke' />
                  <img src={icon1} alt='github' />
                  <img src={icon3} alt='correo' />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
