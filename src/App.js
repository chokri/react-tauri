<<<<<<< HEAD
import {useEffect, useState} from 'react'
=======
import { useState } from "react"
>>>>>>> Send & Receive msg
import logo from './logo.svg';
import './App.css';
// With the Tauri API npm package:
import { invoke } from '@tauri-apps/api/tauri'

<<<<<<< HEAD
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
=======
const  App = () => {
  const [command, setCommand] = useState('')
  const sendCommand = () => {
    invoke('run_command', {cmd: command}).then(msg => console.log(msg))
>>>>>>> Send & Receive msg
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
