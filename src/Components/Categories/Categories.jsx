import propTypes from 'prop-types';
export default function Categories(props) {
  const { cartas } = props;
  return (
    <>
      {cartas.map((generes, index) => (
        <div key={index}>{generes}</div>
      ))}
    </>
  );
}
Categories.propTypes = {
  cartas: propTypes.arrayOf(propTypes.string),
};
