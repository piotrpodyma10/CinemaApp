import React from 'react'
import MovieList from './MovieList';

// Search movie by name https://api.themoviedb.org/3/search/movie?api_key=09aa640984b4672dd81c4cc5291b03b0&query=dumb

const App = () => {
    return (
        <div>
            <MovieList />
        </div>
    )
}

export default App