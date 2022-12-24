// * importacion para los fetch de la api free-to-play
import axios from 'axios';

// ? importacion de los types
import {
  GET_GAMES,
  GET_TOPGAMES,
} from './types.js';

export const getGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get(
        'https://www.freetogame.com/api/games'
      );
      return dispatch({
        type: GET_GAMES,
        payload: games.data,
      });
    } catch (error) {
      alert(
        'Problema Con el Servidor, intenta mas tarde.'
      );
    }
  };
};

export const getTopGames = () => {
  return async function (dispatch) {
    try {
      // ! Insert sort by, eg: release-date, popularity, alphabetical or relevance
      const topGames = await axios.get(
        'https://www.freetogame.com/api/games?sort-by=popularity'
      );
      return dispatch({
        type: GET_TOPGAMES,
        payload: topGames.data,
      });
    } catch (error) {
      alert(
        'Problema Con el Servidor, intenta mas tarde.'
      );
    }
  };
};
