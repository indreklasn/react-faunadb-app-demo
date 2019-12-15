import React from 'react'
import { Form, Button, Input } from 'antd';
import { createNote } from '../api'
import { toast } from 'react-toastify';

const NoteForm = ({ form, notes, setNotes }) => {

  const { getFieldDecorator, validateFields, resetFields } = form;

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err && values.note) {
        createNote(values.note).then(res => {
          const newNotesArray = notes.concat([res])
          setNotes(newNotesArray)
          toast.success('Added Successfully')
          resetFields()
        })
      }
    });
  }
  
  
  return (
    <Form style={{marginBottom: '25px'}} layout="horizontal" onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('note', {
        rules: [],
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