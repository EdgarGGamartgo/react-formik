import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchMovieRequest, addMovie, fetchMovies } from './../redux'

const MoviesCounter = ({ className, movies }) => {
    return (
        <div className={className}>
            {movies.length} movies found
        </div>
    )
}

MoviesCounter.propTypes = {
    className: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchMovie: (show) => dispatch(fetchMovieRequest(show)),
       createMovie: (movieData) => dispatch(addMovie(movieData)),
       fetchMoviesRequest: (filters) => dispatch(fetchMovies(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesCounter)
