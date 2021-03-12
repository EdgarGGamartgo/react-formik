import React, { useEffect } from 'react'
import { CardsContainer } from './../styles'
import MovieCard  from './MovieCard'
import { connect } from 'react-redux'
import { fetchMovies } from './../redux'

const CardGallery = ({ load, movies,  fetchMoviesRequest}) => {


    useEffect(() => {
        fetchMoviesRequest()
    }, [fetchMoviesRequest, load])

    return (
            <CardsContainer>
                {
                    movies.map(movie => {
                        return (
                            <MovieCard
                            url={movie.poster_path}
                            overview={movie.overview}
                            movieId={movie.id}
                            key={movie.id}
                            id={movie.id}
                            img={movie.poster_path}
                            title={movie.title}
                            genre={movie.genres ? movie.genres.join(', ') : ''}
                            releaseDate={movie.release_date}
                            imgAlt={movie.tagline}
                            runtime={movie.runtime}
                            />
                        )
                    })
                }
            </CardsContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesRequest: () => dispatch(fetchMovies())
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movie.movies,
        load: state.movie.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardGallery)