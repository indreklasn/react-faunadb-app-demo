import { client, q } from '../config/db'

const deleteNote = noteRef => client.query(
  q.Delete(q.Ref(q.Collection('notes'), noteRef))
)
.then(res => res)
.catch(err => console.warn(err.message))

export default deleteNote