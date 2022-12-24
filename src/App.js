import './App.css';

// & Components
import About from './Components/About/About.jsx';
import TopGames from './Components/TopGames/TopGames.jsx';
import Detail from './Components/Detail/Detail.jsx';

// * Routing
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          exact
          path='/Detail/:id'
          element={<Detail />}
        />
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
      </Routes>
    </div>
  );
}

export default App;
