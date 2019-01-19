export const allMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload
        default:
            return state
    }
}

export const selectedMovieReducer = (selectedMovie = null, action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return selectedMovie
    }
}