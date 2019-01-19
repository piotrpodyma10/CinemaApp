import axios from 'axios'
import { dummyMovies } from '../data/dummyMovies'

export const movies = async () => {
    const data = dummyMovies
    const movies = []
    
    for(let i=0; i<data.length; i++) {
        await axios.get(`https://api.themoviedb.org/3/movie/${data[i].id}?api_key=09aa640984b4672dd81c4cc5291b03b0`)
            .then(movie => {
                movies.push(movie.data)
            }).catch((e) => {
                console.log(e)
            })
    }

    return await movies
} 