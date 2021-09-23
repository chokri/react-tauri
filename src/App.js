import {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api/tauri'

const App = () => {
  const [title, setTitle] = useState('')
  const [command, setCommand] = useState('')
  const [response, setResponse] = useState('')

  useEffect(() => {
    fetch("https://kaliex.co/api")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setTitle(result.title)
      })
  }, [])
  const sendCommand = () => {
    invoke('run_command', {
      cmd: command
    }).then(msg => setResponse(msg))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, this is a {title} app! Folks
        </p>
        <p>
          <input onChange={e => setCommand(e.target.value)} value={command} placeholder="Type something" />
        </p>
        <p>
          <button onClick={sendCommand}>send</button>
        </p>
        <p>
          {response && <div><pre>{response}</pre></div>}
        </p>
      </header>
    </div>
  );
}

export default App;
