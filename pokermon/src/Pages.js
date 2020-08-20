import React from 'react'

export default function Pages({goNextPage, goPrevPage}) {
    return (
        <div>
            {goPrevPage && <button onClick={goPrevPage}>Previous Page</button>}
            {goNextPage &&<button onClick={goNextPage}>Next Page</button>}
        </div>
    )
}
