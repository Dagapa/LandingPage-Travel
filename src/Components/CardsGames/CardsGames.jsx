// * componente card
import CardGame from '../CardGame/CardGame.jsx';

// * Hooks de react redux
import { connect } from 'react-redux';

// * action de redux
import { getGames } from '../../Redux/actions/actions.js';
import { Component, createRef } from 'react';

// * libreria encargada de validar los datos
import PropTypes from 'prop-types';

// & css
import styled from './CardsGames.module.css';

// * aminejs
import anime from 'animejs';

class CardsGames extends Component {
  state = {
    isLoading: true,
  };

  elementRef = createRef();

  animate = () => {
    const element = this.elementRef.current;

    anime({
      targets: element,
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: -250, duration: 1000, delay: 500 },
      ],
      translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
      ],
      easing: 'easeOutElastic(1, .8)',
      loop: true,
    });
  };

  componentDidMount() {
    this.animate();
    this.props.getAllGames();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allGames !== this.props.allGames)
      this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className={styled.loadingContainer}>
          <div ref={this.elementRef} className={styled.box}></div>
        </div>
      );
    }

    const gamesPruebas = this.props.allGames.slice(1, 15);

    return (
      <div className={styled.containerGames}>
        {gamesPruebas.map((game) => {
          return (
            <CardGame
              key={game.id}
              id={game.id}
              img={game.thumbnail}
              title={game.title}
              description={game.short_description}
              genre={game.genre}
            />
          );
        })}
      </div>
    );
  }
}

// * validando los datos que llegan por Props
CardsGames.propTypes = {
  getAllGames: PropTypes.func.isRequired,
  allGames: PropTypes.array.isRequired,
};

// * obteniendo el estado
const mapStateToProps = (state) => {
  return { allGames: state.games };
};

// * haciendo el dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    getAllGames: () => {
      dispatch(getGames(dispatch));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsGames);

/*
this.props.allGames.map((game) => {
          return (
            <CardGame
              key={game.id}
              img={game.thumbnail}
              title={game.title}
              description={game.short_description}
              genre={game.genre}
            />
          );
        })
*/
