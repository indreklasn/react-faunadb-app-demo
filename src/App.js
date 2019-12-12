import React, { useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { client, q } from './config/db'
function App() {

  useEffect(() => {
    client.query(
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
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
