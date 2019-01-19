import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies, selectMovie } from '../actions'
import Movie from './Movie'

class MovieList extends React.Component {
    componentDidMount() {
        this.props.fetchMovies()
    }

    renderList() {
        return (
            <div>
                <div style={{color:"lawngreen", textAlign:"center", marginTop:"100px"}}><i class="film icon"></i>Best Movies Ever!</div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
                    {this.props.movies.map(movie => {
                        return (
                            <div style={{width: "150px", margin: "10px", marginTop:"-100px"}} key={movie.title}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} height={150} width={150} />
                                <br />
                                <div style={{textAlign:"center", color:"white", fontSize:"16px", padding:"5px"}}>{movie.title}</div>
                                <button 
                                    className="ui button primary"
                                    style={{width:"150px", margin: "0px"}}
                                    onClick={() => this.props.selectMovie(movie)}    
                                >
                                Check it out!
                                </button>
                                <Movie />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    render() {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    return { movies: state.movies }
}

export default connect (
    mapStateToProps,
    { fetchMovies,
      selectMovie
     }
)(MovieList)