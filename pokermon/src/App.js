import React, { useState, useEffect } from 'react';
import PokeList from './PokeList';
import axios from 'axios'
import Pages from './Pages';

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
      setPrevURL(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })

    return () => {
      cancel()
    }

  }, [currentURL])


  function goNextPage() {
    setCurrURL(nextURL);
  }

  function goPrevPage() {
    setCurrURL(prevURL);
  }


  if (loading) return `Loading...`

  return (
    <>
      <PokeList pokemon={pokemon} />
      <Pages
        goNextPage ={nextURL ? goNextPage : null}
        goPrevPage ={prevURL ? goPrevPage : null}
      />
    </>
  );
}

export default App;
