// componente card
import CardGame from '../CardGame/CardGame.jsx';
import Loading from '../Loading/Loading.jsx';
import Pagination from '../Pagination/Pagination.jsx';
// Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// css
import './CardsGames.css';

export default function CardsGames() {
  const { id } = useParams();
  const [state, setState] = useState({
    isLoading: true,
    renderizar: [],
  });

  const allGames = useSelector((state) => state.games);
  const gamesRender = useSelector((state) => state.renderGames);

  useEffect(() => {
    if (gamesRender.length > 0)
      setState({
        isLoading: false,
        renderizar: gamesRender,
      });
  }, [gamesRender]);

  useEffect(() => {
    const start = id * 10;
    const end = start + 10;
    if (allGames.length > 0 && id <= allGames.length)
      setState({
        isLoading: false,
        renderizar: allGames.slice(start, end),
      });
  }, [id, allGames]);

  if (state.isLoading) return <Loading />;

  return (
    <div className='containerGames'>
      {state.renderizar.map((game) => {
        return (
          <CardGame
            open={undefined}
            key={game.id}
            id={game.id}
            img={game.thumbnail}
            title={game.title}
            description={game.short_description}
            genre={game.genre}
            ruta={'/games'}
          />
        );
      })}

      <div className='containerPages'>
        <Pagination
          totalPages={allGames.length / 10 - 1}
          currentPages={Number(id)}
          ruta='cardsgames'
        />
      </div>
    </div>
  );
}
