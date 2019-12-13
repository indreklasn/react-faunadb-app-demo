import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllNotes, createNote, deleteNote, editNote } from './api'
function App() {

  useEffect(() => {
    getAllNotes.then(res => console.log(res))
    // createNote('clean kitchen').then(res=> console.log(res))
    // deleteNote("251637892935320064").then(res => console.log(res))
    editNote('251638296424219147', 'new text').then(() => 'note updated successfully!')
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
