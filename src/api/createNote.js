import { client, q } from '../config/db'

const createNote = text => client.query(
  q.Create(
    q.Collection('notes'),
    {
      data: {
        text,
      },
    },
  )
)
.then(ret => ret)
.catch(err => console.warn(err))


export default createNote