import './App.css';
import './components/style.css';
import Calculate from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Calculate />
    </div>
  );
}

export default App;
