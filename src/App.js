import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    fetch("https://kaliex.co/api")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setTitle(result.title)
      })
  }, [])
  const clearInput = () => {
    alert('Hello World');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is a {title} app! Folks
        </p>
        <p>
          <button onClick={clearInput}>Open</button>
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
