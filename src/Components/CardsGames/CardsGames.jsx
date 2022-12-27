// * componente card
import CardGame from '../CardGame/CardGame.jsx';
import Loading from '../Loading/Loading.jsx';
// * Hooks de react redux
import { connect } from 'react-redux';
// * action de redux
import { Component } from 'react';
// * libreria encargada de validar los datos
import PropTypes from 'prop-types';
// & css
import './CardsGames.css';

class CardsGames extends Component {
  state = { isLoading: true, gamesRender: [] };

  // 
  UNSAFE_componentWillMount() {
    if (this.props.allGames.length > 0) this.setState({ isLoading: false });
  }

  // executed immediately after the component receives new properties
  // I wonder if the previous "props.allGames" changed or was updated.
  // if it arrives empty, it will stay on the loading screen
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.allGames.length > 0) this.setState({ isLoading: false });
  }

  // pregunta si el "state.rendergames" anterior es diferente al nuevo
  // si lo es, entonces actualiza el "state.gamesRender"
  componentDidUpdate(prevProps) {
    if (prevProps.render !== this.props.render)
      this.setState({ ...this.state, gamesRender: this.props.render });
  }

  render() {
    if (this.state.isLoading) return <Loading />;

    let gamesShow;
    if (this.state.gamesRender.length > 0) gamesShow = this.state.gamesRender;
    else gamesShow = this.props.allGames.slice(1, 15);

    console.log('💻 -> CardsGames -> render -> gamesShow', gamesShow);

    return (
      <div className='containerGames'>
        {gamesShow.map((game) => {
          return (
            <CardGame
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
      </div>
    );
  }
}

// * validando los datos que llegan por Props
CardsGames.propTypes = {
  allGames: PropTypes.array.isRequired,
  render: PropTypes.array,
};

// * obteniendo el estado
const mapStateToProps = (state) => {
  return { allGames: state.games, render: state.renderGames };
};

export default connect(mapStateToProps, null)(CardsGames);
