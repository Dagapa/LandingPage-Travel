import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';

export default function Pagination({ totalPages, currentPages, ruta }) {
  const [state, setState] = useState({
    btn1: 0,
    center: 1,
    btn2: 2,
  });
  useEffect(() => {
    if (state.btn1 >= 1 && state.btn2 < totalPages)
      setState({
        btn1: currentPages - 1,
        center: currentPages,
        btn2: currentPages + 1,
      });
  }, [currentPages]);

  function leftPage() {
    if (state.btn1 >= 1)
      setState({
        btn2: state.center,
        center: --state.center,
        btn1: state.center - 1,
      });
  }

  function rightPage() {
    if (state.btn2 < totalPages)
      setState({
        btn1: state.center++,
        center: state.center++,
        btn2: state.center++,
      });
  }

  return (
    <>
      <button onClick={leftPage}>{'<'}</button>
      <Link
        to={
          ruta === 'cardsgames'
            ? `/home/${state.btn1}`
            : `/topgames/${state.btn1}`
        }
      >
        <button className={'activado'}>{state.btn1}</button>
      </Link>
      <Link
        to={
          ruta === 'cardsgames'
            ? `/home/${state.center}`
            : `/topgames/${state.center}`
        }
      >
        <button>{state.center}</button>
      </Link>

      <Link
        to={
          ruta === 'cardsgames'
            ? `/home/${state.btn2}`
            : `/topgames/${state.btn2}`
        }
      >
        <button className={'activado'}>{state.btn2}</button>
      </Link>

      <button onClick={rightPage}>{'>'}</button>
    </>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPages: PropTypes.number.isRequired,
  ruta: PropTypes.string.isRequired,
};
