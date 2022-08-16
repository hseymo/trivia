import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/index.js';
import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Gameplay from './components/Gameplay/index.js';
import Scoreboard from './components/Scoreboard/index.js';
import Locations from './components/Locations/index.js';
import Footer from './components/Footer/index.js';


function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gameplay" element={<Gameplay/>} />
          <Route path="/scoreboard" element={<Scoreboard/>} />
          <Route path="/locate" element={<Locations/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
