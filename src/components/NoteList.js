import React, { memo } from 'react'
import { Icon } from 'antd'


const NoteList = memo(({data, onRemove, onEdit}) => (
  <>
    {data && data.map(note => (
      <div key={note.ref.id} className="note-row">
        <p 
          contentEditable
          suppressContentEditableWarning
          onInput={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
          style={{minWidth: '200px'}}>
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