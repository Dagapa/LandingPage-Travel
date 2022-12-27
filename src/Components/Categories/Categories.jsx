import propTypes from 'prop-types';
import styles from "./Categories.module.css"
export default function Categories(props) {
  const { cartas } = props;
  return (
    <div className={styles.container}>
      {cartas.map((generes, index) => (
        <div className={styles.gener} key={index}><p className={styles.generes}>{generes}</p></div>
      ))}
    </div>
  );
}
Categories.propTypes = {
  cartas: propTypes.arrayOf(propTypes.string),
};

