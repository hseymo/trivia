import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Let's Play Trivia!</h1>
        <nav>
          <ul>
            <li><a>About</a></li>
            <li><a>Play</a></li>
            <li><a>Scoreboard</a></li>
            <li><a>Trivia Near Me</a></li>
          </ul>
        </nav>
      </header>
      <body>
        <section class='gameplay'>
          <p>Game play</p>
        </section>
        <aside class='clockscore'>
          <p>Clock and scoreboard</p>
        </aside>
      </body>
      <footer>
        <p>Thanks for visiting!</p>
      </footer>
    </div>
  );
}

export default App;
