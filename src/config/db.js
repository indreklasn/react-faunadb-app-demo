import faunadb from 'faunadb'

const client = new faunadb.Client({ secret: process.env.REACT_APP_FAUNADB_KEY })
const q = faunadb.query

console.log(process.env.REACT_APP_FAUNADB_KEY)

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