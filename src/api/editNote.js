import { client, q } from '../config/db'

const editNote = (noteId, newText) => client.query(
  q.Update(
    q.Ref(q.Collection('notes'), noteId),
    { data: { text: newText } },
  )
)
.then((ret) => console.log(ret))
.catch(err => console.warn(err))


export default editNote