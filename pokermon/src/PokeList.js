import React from 'react'

export default function PokeList({ pokemon }) {
    return (
        <div>
            {pokemon.map(pok => (
                <div key={pok}>{pok}</div>
            ))}
        </div>
    )
}
