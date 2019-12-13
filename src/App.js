import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllNotes, createNote, deleteNote, editNote } from './api'
import { Icon, Card, Avatar } from 'antd';


function App() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
    // createNote('clean kitchen').then(res=> console.log(res))
    // deleteNote("251637892935320064").then(res => console.log(res))
    // editNote('251638296424219147', 'new text').then(() => 'note updated successfully!')
  }, [notes])
  return (
    <div className="App">
      <header className="App-c">
          {notes.map(note => (
            <div key={note.ref.id} className="note-row" onClick={() => console.log('clicking on note')}>
              <p style={{minWidth: '200px'}}>{note.data.text}</p>
              <Icon theme="twoTone" style={{ fontSize: '16px', margin: '0 10px 0 0'}}  type="edit" />
              <Icon theme="twoTone" style={{ fontSize: '16px'}} type="delete" />

            </div>
            ))
          }
      </header>
    </div>
  );
}

export default App;
