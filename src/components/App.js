import logo from '../logo.svg';
import './App.css';
import AppContent from './AppContent';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header pageTitle="Frontend authenticated JWT" className="App-header" logoSrc={logo}/>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <AppContent/>
          </div>
        </div>
      </div>
      
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
