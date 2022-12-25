import './App.css';

// & Components
import About from './Components/About/About.jsx';
import TopGames from './Components/TopGames/TopGames.jsx';
import Landing from './Components/Landing/Landing';

// * Routing
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/topgames' element={<TopGames />} />
        <Route exact path='/' element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
