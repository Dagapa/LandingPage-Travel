import './App.css';

// & Components
import About from './Components/About/About.jsx';
import TopGames from './Components/TopGames/TopGames.jsx';

// * Routing
import { Routes, Route } from 'react-router-dom';

function App() {
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
      </Routes>
    </div>
  );
}

export default App;
