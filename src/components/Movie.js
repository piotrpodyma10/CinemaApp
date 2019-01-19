import React from 'react'
import { connect } from 'react-redux'

class Movie extends React.Component {

    render() {
        console.log('MovieComponent', this.props)
        return null
    }
}

const mapStateToProps = state => {
    return { 
        movies: state.movies,
    }
}

export default connect(mapStateToProps, {})(Movie)