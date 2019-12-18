import React, { memo } from 'react'
import { Icon } from 'antd'

const NoteList = memo(({data, onRemove, onEdit}) => (
  <>
    {data && data.map(note => (
      <div key={note.ref.id} className="note-row">
        <p 
          contentEditable
          suppressContentEditableWarning
          onChange={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
          onBlur={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
          onInput={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
          >
            {note.data.text}
        </p>
        <Icon 
          onClick={(e) => onRemove(e, note.ref.id)} 
          theme="twoTone" style={{ cursor: "pointer", fontSize: '16px'}} 
          type="delete" 
        />
      </div>
    ))}
  </>
))

export default NoteList;