import logo from './logo.svg';
import './App.css';

const number = 666;
const flag = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'pink'
        }}>
          Hello!
        </p>
        <p>
          {number}
        </p>
        <p>
          {123}
        </p>
        <p>
          {1+9}
        </p>
        <p>
          {flag && 'Flag is false'}
        </p>
        <p>
          {flag ? 'Flag is true' : 'Flag is false'}
        </p>
        <p>
          {undefined}
          {null}
          {false}
          {true}
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
    </div>
  );
}

export default App;
