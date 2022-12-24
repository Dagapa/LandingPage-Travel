import axios from 'axios';

export const GET_GAMES = 'GET_GAMES';
export const GET_TOPGAMES = 'GET_TOPGAMES';
export const GET_DETAIL = 'GET_DETAIL';

export const getGames = () => {
  return async function (dispatch) {
    try {
      const games = await axios.get('https://www.freetogame.com/api/games');
      return dispatch({
        type: GET_GAMES,
        payload: games.data,
      });
    } catch (error) {
      alert('Problema Con el Servidor, intenta mas tarde.');
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
      alert('Problema Con el Servidor, intenta mas tarde.');
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: { id: id },
      headers: {
        'X-RapidAPI-Key': '607840f960msh3b91d6b5509d7a1p170532jsn564205734362',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        return dispatch({
          type: GET_DETAIL,
          payload: response.data,
        });
      })
      .catch(function (er) {
        alert('Problema con el servidor, intenta mas tarde');
      });
  };
};
