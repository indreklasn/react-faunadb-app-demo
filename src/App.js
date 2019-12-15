import React, { useEffect, useState  } from 'react';
import './App.css';
import { getAllNotes, deleteNote, editNote } from './api'
import { NoteList, NoteForm } from './components'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Removed successfully')
  }

  function handleEdit(e, id, newText) {
    e.preventDefault();
    editNote(id, newText).then(res => res)
  }

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-container">
        <div className="notes-container">
          <NoteForm notes={notes} setNotes={setNotes} />
          <NoteList 
            onEdit={handleEdit} 
            onRemove={handleRemove} 
            data={notes}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
