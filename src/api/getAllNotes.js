import { client, q } from '../config/db'

const getAllNotes = client.query(
  q.Paginate(
    q.Match(
      q.Ref('indexes/notes')))
)
  .then((response) => {
    const productRefs = response.data
    // create new query out of todo refs. 
    // https://docs.fauna.com/fauna/current/api/fql/
    const getAllProductDataQuery = productRefs.map((ref) => {
      return q.Get(ref)
    })
    // query the refs
    return client.query(getAllProductDataQuery).then((data) => data)
  })
  .catch((error) => console.log('error', error.message))

export default getAllNotes;