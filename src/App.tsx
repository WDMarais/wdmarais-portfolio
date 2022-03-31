import logo from './logo.svg';
import './App.css';
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <body>
        <div>
          <Counter>
            {({ count, setCount }) => (
              <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            )}
          </Counter>
        </div>
      </body>
    </div>
  );
}

export default App;
