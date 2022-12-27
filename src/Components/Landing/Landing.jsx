import SearchBar from '../SearchBar/SearchBar';
import CardsGames from '../CardsGames/CardsGames';
import TopGames from '../TopGames/TopGames'
import * as actions from '../../Redux/actions/actions';
import styles from './Landing.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Landing() {
  const allGames = useSelector((state) => state.games);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.renderGames(allGames));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banner}>Banner aca</div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
      <div className={styles.topGames}>
        <TopGames/>
      </div>
      <CardsGames />
    </>
  );
}
