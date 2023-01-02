// * importacion de los types.js

import {
  GET_GAMES,
  GET_TOPGAMES,
  GET_DETAIL,
  RENDER_GAMES,
} from '../actions/types.js';

const initialState = {
  games: [],
  topGames: [],
  detail: {},
  renderGames: [],
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
        games: payload,
      };
    case GET_TOPGAMES:
      return {
        ...state,
        topGames: payload,
      };
    case RENDER_GAMES:
      return {
        ...state,
        renderGames: payload,
      }
      default:
      return {
        games: [],
        topGames: [],
      };
  }
};

export default rootReducer;
