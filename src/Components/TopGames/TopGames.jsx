import { useEffect, useState } from 'react';
import './TopGames.css';
import CardGame from '../CardGame/CardGame.jsx';
import Loading from '../Loading/Loading.jsx';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination.jsx';

export default function TopGames() {
  const { id } = useParams();
  const [state, setState] = useState({
    isLoading: true,
    seeMore: true,
    renderizar: [],
    position: 0,
  });

  const allGames = useSelector((state) => state.games);

  const start = id * 10;
  const end = start + 10;

  function hasValidRange() {
    return allGames.length > 0 && id <= allGames.length / 10 - 1;
  }

  useEffect(() => {
    if (hasValidRange())
      setState({
        ...state,
        params: id,
        isLoading: false,
        renderizar: allGames.slice(start, end),
        position: start,
      });
  }, [id, allGames]);

  if (state.isLoading) return <Loading />;

  const responsive = () => {
    setState({
      ...state,
      seeMore: !state.seeMore,
      position: 0,
    });
  };
  return (
    <div className='containerTop'>
      <div className='containerInfoMobile'>
        <h1>Top Games</h1>
        <button onClick={responsive}>See more</button>
      </div>
      <div
        className={
          state.seeMore ? 'containerGamesTop' : 'containerGamesTopActive'
        }
      >
        {state.renderizar.map((game, index) => {
          return (
            <CardGame
              key={game.id}
              id={game.id}
              img={game.thumbnail}
              title={game.title}
              description={game.short_description}
              genre={game.genre}
              position={state.position + ++index}
              open={state.seeMore}
              ruta={'/topgamess'}
            />
          );
        })}

        <div className={state.seeMore ? 'desactive' : 'containerPages'}>
          <Pagination
            totalPages={allGames.length / 10 - 1}
            currentPages={Number(id)}
            ruta='topgames'
          />
        </div>
      </div>
    </div>
  );
}
