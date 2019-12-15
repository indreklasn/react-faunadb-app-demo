import React from 'react'
import { Form, Button, Input } from 'antd';
import { createNote } from '../api'

const NoteForm = ({ form, notes, setNotes }) => {

  const { getFieldDecorator, validateFields, resetFields } = form;

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        createNote(values.note).then(res => {
          const newNotesArray = notes.concat([res])
          setNotes(newNotesArray)
          resetFields()
        })
      }
    });
  }
  
  
  return (
    <Form layout="horizontal" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('note', {
        rules: [{ required: true, message: 'Please Leave A Note' }],
        })(
          <Input
            className="note-input"
            size="large"
            placeholder="Add New Note"
          />,
          <Button>Create</Button>
        )}
      </Form.Item>

  </Form>
  )
}

const WrappedNoteForm = Form.create({name: 'notes_form'})(NoteForm)

export default WrappedNoteForm;