import { useParams } from 'react-router-dom';
import * as actions from '../../Redux/actions/actions.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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

  // el problema principal de este codigo es la demora en obtener la informacion. cuando eso se resuelva puedo conrinuar

  return (
    <>
      <h1>{detalle?.title}</h1>
      <h1>putas</h1>
    </>
  );
}
