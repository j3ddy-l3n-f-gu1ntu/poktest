import React, { useState } from 'react';
import PokeList from './PokeList';

function App() {
  const [pokemon, setPokemon] = useState(["ditto", "mewtwo"]);
  const user = {
    firstName: 'joe',
    lastName: 'mama'
  };
  return (
    <PokeList pokemon={pokemon} />
  );
}

export default App;
