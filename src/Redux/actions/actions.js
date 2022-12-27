// * importacion para los fetch de la api free-to-play
import axios from 'axios';

// ? importacion de los types
import { GET_GAMES, GET_TOPGAMES, RENDER_GAMES } from './types.js';

// ^ configuracion de axios
// ! IMPORTANTE toca cambiar estos datos para el .ENV
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'd276d8c624mshcbbfcc7e1b7f610p1ebcc9jsnaf4333d5659f',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

// release-date, popularity, alphabetical or relevance
const options2 = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: { 'sort-by': 'popularity' },
  headers: {
    'X-RapidAPI-Key': 'd276d8c624mshcbbfcc7e1b7f610p1ebcc9jsnaf4333d5659f',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const getGames = () => {
  return async function (dispatch) {
    axios
      .request(options)
      .then((response) => {
        return dispatch({
          type: GET_GAMES,
          payload: response.data,
        });
      })
      .catch(function (er) {
        return dispatch({
          type: GET_GAMES,
          payload: ['error al cargar los Juegos...'],
        });
      }, 10000);
  };
};

export const getTopGames = () => {
  return function (dispatch) {
    axios
      .request(options2)
      .then((response) => {
        return dispatch({
          type: GET_TOPGAMES,
          payload: response.data,
        });
      })
      .catch(function (er) {
        alert('Problema Con el Servidor, intenta mas tarde.');
      });
  };
};

export const renderGames = (games) => {
  return {
    type: RENDER_GAMES,
    payload: games,
  };
};
