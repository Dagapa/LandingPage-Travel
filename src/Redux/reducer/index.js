// * importacion de los types.js
import { GET_GAMES, GET_TOPGAMES, GET_DETAIL } from '../actions/actions.js';

const initialState = {
  games: [],
  topGames: [],
  detail: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case GET_GAMES:
      return {
        ...state,
        games: [...state.games, payload],
      };
    case GET_TOPGAMES:
      return {
        ...state,
        topGames: [...state.topGames, payload],
      };
    default:
      return {
        games: [],
        topGames: [],
      };
  }
};

export default rootReducer;
