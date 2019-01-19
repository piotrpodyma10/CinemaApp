import { movies } from '../models/movies'

export const fetchMovies = () => async dispatch => {
    const response = await movies()
        
    dispatch({ type: 'FETCH_MOVIES', payload: response })
}

export const selectMovie = (movie) => {
    console.log('mmm', movie)
    return { 
        type: 'MOVIE_SELECTED', 
        payload: movie 
    }
}