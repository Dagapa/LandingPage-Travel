// css
import './App.css';

// Routing
import { Routes, Route } from 'react-router-dom';
// Components
import About from './Components/About/About.jsx';
import TopGames from './Components/TopGames/TopGames.jsx';
import Detail from './Components/Detail/Detail.jsx';
import Landing from './Components/Landing/Landing';
import CardsGames from './Components/CardsGames/CardsGames.jsx';
// animations Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
// Hooks
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// actions
import { getGames, getTopGames } from './Redux/actions/actions';

function App() {
  // start dispatch for games and topGames
  const dispatch = useDispatch();
  const getAllGames = () => {
    dispatch(getGames(dispatch));
    dispatch(getTopGames(dispatch));
  };

  // INICIO AOS DE FORMA GLOBAL y hago la peticion de los juegos
  useEffect(() => {
    AOS.init({
      offset: 130,
    });
    getAllGames();
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/Detail/:id' element={<Detail />} />
        <Route exact path='/nav' element={<NavBar />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/topgames' element={<TopGames />} />
        <Route
          exact
          path='/pruebaGamesTemp' // TODO: uso temporal
          element={<CardsGames />}
        />
        <Route
          exact
          path='/pruebaTopsGamesTemp' // TODO: uso temporal
          element={<TopGames />}
        />
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
