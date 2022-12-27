import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TopGames.css';
import CardGame from '../CardGame/CardGame.jsx';
import Loading from '../Loading/Loading.jsx';

class TopGames extends Component {
  state = { isLoading: true, seeMore: true };

  UNSAFE_componentWillMount() {
    if (this.props.allTopGames.length > 0)
      this.setState({ ...this.state, isLoading: false });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.allTopGames.length > 0)
      this.setState({ ...this.state, isLoading: false });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    const gamesPruebas = this.props.allTopGames.slice(1, 10);

    const responsive = () => {
      this.setState({
        ...this.state,
        seeMore: !this.state.seeMore,
      });
      console.log(this.state);
    };

    if (this.state.seeMore)
      return (
        <div className='containerTop'>
          <div className='containerInfoMobile'>
            <h1>Top Games</h1>
            <button onClick={responsive}>See more</button>
          </div>
          <div className='containerGamesTop'>
            {gamesPruebas.map((game, index) => {
              return (
                <CardGame
                  key={game.id}
                  id={game.id}
                  img={game.thumbnail}
                  title={game.title}
                  description={game.short_description}
                  genre={game.genre}
                  position={++index}
                  ruta={'/topgamess'}
                />
              );
            })}
          </div>
        </div>
      );

    return (
      <div className='containerTop'>
        <div className='containerInfoMobile'>
          <h1>Top Games</h1>
          <button onClick={responsive}>See more</button>
        </div>
        <div className='containerGamesTopActive'>
          {gamesPruebas.map((game, index) => {
            return (
              <CardGame
                key={game.id}
                id={game.id}
                img={game.thumbnail}
                title={game.title}
                description={game.short_description}
                genre={game.genre}
                position={++index}
                ruta={'/topgamess'}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// * validando los datos que llegan por Props
TopGames.propTypes = {
  allTopGames: PropTypes.array.isRequired,
};

// * obteniendo el estado
const mapStateToProps = (state) => {
  return { allTopGames: state.topGames };
};

export default connect(mapStateToProps, null)(TopGames);
