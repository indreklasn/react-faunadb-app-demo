import React, { useEffect, useState  } from 'react';
import './App.css';
import { getAllNotes, deleteNote, editNote } from './api'
import { NoteList, NoteForm } from './components'

function App( ) {
  
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
  }, [])

  function handleRemove(e, id) {
    e.preventDefault();
    deleteNote(id).then(res => res)
    const newNotesArray = notes.filter(note => note.ref.id !== id)
    setNotes(newNotesArray)
  }

  function handleEdit(e, id, newText) {
    e.preventDefault();
    editNote(id, newText).then(res => res)
  }

  return (
    <div className="App">
      <header className="App-container">
        <NoteForm notes={notes} setNotes={setNotes} />
        <NoteList onEdit={handleEdit} onRemove={handleRemove} data={notes}></NoteList>
      </header>
    </div>
  );
}

export default App;
