// & css
import './App.css';

// * Routing
import { Routes, Route } from 'react-router-dom';

// & Components
import About from './Components/About/About.jsx';
import TopGames from './Components/TopGames/TopGames.jsx';
import CardsGames from './Components/CardsGames/CardsGames.jsx';

// & animations Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// * Hooks
import { useEffect } from 'react';

function App() {
  // ^ INICIO AOS DE FORMA GLOBAL
  useEffect(() => {
    AOS.init({
      offset: 160,
    });
  }, []);
  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/about'
          element={<About />}
        />
        <Route
          exact
          path='/topgames'
          element={<TopGames />}
        />
        <Route
          exact
          path='/pruebaGamesTemp' // TODO: uso temporal
          element={<CardsGames />}
        />
      </Routes>
    </div>
  );
}

export default App;
