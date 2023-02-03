import React, { CSSProperties } from 'react';
import logo from './logo.svg';
import { init } from 'text-metrics';
import './App.css';

const textStyles: CSSProperties = {
  fontSize: '30px',
  lineHeight: '35px',
  fontFamily: 'Helvetica, Arial, sans-serif',
  fontWeight: 400,
  //width: 100,
  paddingLeft: '10px',
  paddingRight: '5px',
  whiteSpace: 'pre-wrap'
}

const TEXT = 
`u
n
i
c
o
r
n
s
`

function App() {
  

  const textMetrics = init(textStyles);

  const width = textMetrics.width(TEXT)
  const height = textMetrics.height(TEXT)
  const padding = textMetrics.padding()
  const lines = textMetrics.lines(TEXT)
  //const parseArgs = parseArgsa().

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={textStyles}>
          { TEXT } 
        </p>
        <p>
          Width: { width } <br/>
          Padding: { padding } <br/>
          Height: { height } <br/>
          lines: { lines.join(",") } <br/>
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
