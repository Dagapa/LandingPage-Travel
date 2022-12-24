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
        <p>
          Edit <code>src/App.js</code> and save to
          reload.
        </p>
        <p>que ondis</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
