import logo from './logo.svg';
import './styles/App.scss';
import User from './User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <User name="John Doe" email="john.doe@example.com" avatarUrl="https://example.com/avatar.jpg" />
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome :)
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
