import React, { useEffect, useState, useReducer  } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllNotes, createNote, deleteNote, editNote } from './api'
import { Icon, Card, Avatar, Form, Button, Input } from 'antd';
import { NoteList } from './components'

function App({form}) {
  const { getFieldDecorator, validateFields, resetFields } = form
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAllNotes.then(res => setNotes(res))
  }, [])

  useEffect(() => {
    // createNote('clean kitchen').then(res=> console.log(res))
    // deleteNote("251637892935320064").then(res => console.log(res))
    // editNote('251638296424219147', 'new text').then(() => 'note updated successfully!')
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        createNote(values.note).then(res => {
          const newNotesArray = notes.concat([res])
          setNotes(newNotesArray)
          console.log(newNotesArray)
          resetFields()
        })
    
      }
    });
  }

  return (
    <div className="App">
      <header className="App-container">
         <Form layout="inline" onSubmit={handleSubmit}>
           <Form.Item>
           {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please Leave A Note' }],
          })(
            <Input
              size="large"
              placeholder="Add New Note"
            />,
          )}
           </Form.Item>
         </Form>
          <NoteList data={notes}></NoteList>
      </header>
    </div>
  );
}

const WrappedApp = Form.create({name: 'notes_form'})(App)
export default WrappedApp;
