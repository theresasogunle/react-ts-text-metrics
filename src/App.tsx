import React from 'react';
import logo from './logo.svg';
import textMetrics from 'text-metrics';
import './App.css';

const textStyles = {
  fontSize: '30px',
  lineHeight: '20px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 400,
  width: 100,
}

const TEXT = "unicorns"

function App() {
  

  const textMetrics = textMetrics.init(textStyles);

  const width = textMetrics.width(TEXT)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={textStyles}>
          { TEXT } 
        </p>
        <p>
          Width: { width }
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
