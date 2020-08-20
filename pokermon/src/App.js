import React, { useState } from 'react';
import PokeList from './PokeList';

function App() {
  const [pokemon, setPokemon] = useState(["ditto", "mewtwo"]);
  return (
    <PokeList pokemon={pokemon} />
  );
}

export default App;
