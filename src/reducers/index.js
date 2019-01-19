import { combineReducers } from 'redux'
import { 
    allMoviesReducer,
    selectedMovieReducer 
} from './moviesReducer'

export default combineReducers({
    movies: allMoviesReducer,
    selectedMovie: selectedMovieReducer
})