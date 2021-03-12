import { 
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    CREATE_MOVIE_REQUEST,
    CREATE_MOVIE_SUCCESS,
    CREATE_MOVIE_ERROR,
    EDIT_MOVIE_REQUEST,
    EDIT_MOVIE_SUCCESS,
    EDIT_MOVIE_ERROR,
    DELETE_MOVIE_REQUEST,
    DELETE_MOVIE_SUCCESS,
    DELETE_MOVIE_ERROR,
 } from "./movieTypes"
 import axios from 'axios'

export const fetchMovieRequest = (payload) => {
    return {
        type: FETCH_MOVIE_REQUEST,
        payload
    }
}

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}


export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        payload: error
    }
}

export const createMovieRequest = () => {
    return {
        type: CREATE_MOVIE_REQUEST
    }
}


export const createMovieSuccess = (movie) => {
    return {
        type: CREATE_MOVIE_SUCCESS,
        payload: movie
    }
}

export const createMovieError = (error) => {
    return {
        type: CREATE_MOVIE_ERROR,
        payload: error
    }
}

export const editMovieRequest = () => {
    return {
        type: EDIT_MOVIE_REQUEST
    }
}


export const editMovieSuccess = (movie) => {
    return {
        type: EDIT_MOVIE_SUCCESS,
        payload: movie
    }
}

export const editMovieError = (error) => {
    return {
        type: EDIT_MOVIE_ERROR,
        payload: error
    }
}

export const deleteMovieRequest = () => {
    return {
        type: DELETE_MOVIE_REQUEST
    }
}


export const deleteMovieSuccess = () => {
    return {
        type: DELETE_MOVIE_SUCCESS,
    }
}

export const deleteMovieError = (error) => {
    return {
        type: DELETE_MOVIE_ERROR,
        payload: error
    }
}



export const fetchMovies = (filters) => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest)
        axios.get(`http://localhost:4000/movies/${filters ? filters : ''}`)
            .then(res => {
                const movies = res.data.data
                dispatch(fetchMoviesSuccess(movies))
            })
            .catch(e => {
                const error = e.message
                dispatch(fetchMoviesError(error))
            })
    }
}

export const addMovie = (body) => {
    return (dispatch) => {
        dispatch(createMovieRequest())
        axios.post('http://localhost:4000/movies', body)
            .then(res => {
                const movie = res.data.data
                dispatch(createMovieSuccess(movie))
            })
            .catch(e => {
                const error = e.message
                dispatch(createMovieError(error))
            })
    }
}

export const editMovie = (body) => {
    return (dispatch) => {
        dispatch(editMovieRequest())
        axios.put('http://localhost:4000/movies', body)
            .then(res => {
                const movie = res.data.data
                dispatch(editMovieSuccess(movie))
            })
            .catch(e => {
                const error = e.message
                dispatch(editMovieError(error))
            })
    }
}

export const deleteMovie = (id) => {
    return (dispatch) => {
        dispatch(deleteMovieRequest())
        axios.delete(`http://localhost:4000/movies/${id}`)
            .then(res => {
                console.log('React data: ', res.data)
                dispatch(deleteMovieSuccess())
            })
            .catch(e => {
                const error = e.message
                dispatch(deleteMovieError(error))
            })
    }
}
