import './App.css';
import Home from './components/home';
import VisBox from './VisBox';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="app-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1 class="homeLink"><a href="/">Advent of Code Visualization</a></h1>
        <table class="yTable">
          <thead>
            <th>Years:</th>
            <th><a href='/2021'>2021</a></th>
            <th><a href='/2022'>2022</a></th>
          </thead>
        </table>
      </header>
      <body>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/:year' element={<Home />}></Route>
            <Route exact path='/:year/:day' element={<Home />}></Route>
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
