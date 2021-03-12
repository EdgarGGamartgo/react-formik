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

const initialState = {
        id: 1,
        title: 'Pulp Fiction',
        genre: 'Action & Adventure',
        releaseDate: new Date(2000,4,3).toISOString().split('T')[0],
        img: 'https://unsplash.it/800/600?image=11',
        imgAlt: 'Movie Img',
        url: 'www.someurl.com',
        overview: 'Pulp fiction is a 1994 Americam crime film...',
        runtime: '154 min',
        show: false,
        loading: false,
        movies: [],
        error: '',
        movie: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                ...action.payload
            }
        
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload,
                error: ''
            }

        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                movies: [],
                error: action.payload
            }

        case CREATE_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.payload,
                error: ''
            }

        case CREATE_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                movie: null,
                error: action.payload
            }

        case EDIT_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case EDIT_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.payload,
                error: ''
            }

        case EDIT_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                movie: null,
                error: action.payload
            }

        case DELETE_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: ''
            }

        case DELETE_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: return state
    }
}

export default reducer