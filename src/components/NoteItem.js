import React from 'react'
import { Icon } from 'antd'
import { deleteNote } from './api'

const NoteItem = (notes) => {
  return (
    <>
      {notes && notes.map(note => (
        <div key={note.ref.id} className="note-row">
          <p style={{minWidth: '200px'}}>{note.data.text}</p>
          <Icon theme="twoTone" style={{ fontSize: '16px', margin: '0 10px 0 0'}}  type="edit" />
          <Icon onClick={() => deleteNote(note.ref.id)} theme="twoTone" style={{ fontSize: '16px'}} type="delete" />
        </div>
      ))}
    </>
  )
}

export default NoteItem;