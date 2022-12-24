// * importacion de los types.js
import {
  GET_GAMES,
  GET_TOPGAMES,
} from '../actions/types.js';

const initialState = {
  games: [],
  topGames: [],
};

const rootReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_GAMES:
      return {
        ...state,
        games: payload,
      };
    case GET_TOPGAMES:
      return {
        ...state,
        topGames: payload,
      };
    default:
      return {
        games: [],
        topGames: [],
      };
  }
};

export default rootReducer;
