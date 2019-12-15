import faunadb from 'faunadb'

const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_KEY })
const q = faunadb.query


// client.query(q.CreateCollection({ name: 'notes' }))
// .then((ret) => console.log(ret))

// client.query(
//   q.CreateIndex({
//     name: 'notes',
//     source: q.Collection('notes'),
//   })
// )
// .then((ret) => console.log(ret))


export { client , q }