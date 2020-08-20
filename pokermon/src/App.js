import React, { useState, useEffect } from 'react';
import PokeList from './PokeList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentURL, setCurrURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextURL, setNextURL] = useState();
  const [prevURL, setPrevURL] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel
    axios.get(currentURL, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextURL(res.data.next)
      setPrevURL(res.data.prev)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
      cancel()
    }

  }, [currentURL])


  function goNextPage () {
    
  }


  if (loading) return `Loading...`

  const user = {
    firstName: 'joe',
    lastName: 'mama'
  };
  return (
    <PokeList pokemon={pokemon} />
  );
}

export default App;
