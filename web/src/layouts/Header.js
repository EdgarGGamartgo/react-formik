import React, { useState, useCallback, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { 
    ParagraphTitle,
    Paragraph,
    ButtonSearch,
    Button,
    Input
} from './../styles'
import PropTypes from 'prop-types';
import { Modal, ModalContent } from './../components';
import MovieDetails from './../components/MovieDetails'
import { connect } from 'react-redux'
import { fetchMovieRequest, addMovie, fetchMovies } from './../redux'

const Header = ({ fetchMoviesRequest, className, showMovieDetails, fetchMovie, createMovie }) =>  {

    const [showModal, setShowModal] = useState(false)
    const [findMovie, setFindMovie] = useState('')
    const [modalData, setModalData] = useState({
        title: '',
        url: '',
        releaseDate: '',
        movieId: '',
        overview: '',
        runtime: '',
        genre: '',
    })

    const toggleModal = () => {
        setShowModal(!showModal)
     };

    const handleInput = (e) => {
        console.log(e.target)
        setModalData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    useEffect(() => {
        fetchMovie({
            show: false
        })
    }, [fetchMovie])

    const showSearch = useCallback(
        () => {
            fetchMovie({
                show: false
            })
        },
        [fetchMovie]
    )

    const handleSubmit = (type) => {
        console.log('handleSubmit from Header.js: ', type)
        console.log('Kiito: ', modalData)
        createMovie({
            "title": modalData.title,
            "tagline": "none",
            "vote_average": 0,
            "vote_count": 0,
            "release_date": modalData.releaseDate,
            "poster_path": modalData.url,
            "overview": modalData.overview,
            "budget": 0,
            "revenue": 0,
            "runtime": +modalData.runtime,
            "genres": modalData.genre.split(', ')
          })
    }

    const sortHandler = (title) => {
        //?search=Fifty%20Shades%20Freed&searchBy=title
          console.log('KYOKU: ', title)
          fetchMoviesRequest(`?search=${title}&searchBy=title`)
      }

        return (
            <div className={className}>
                {
                    showMovieDetails 
                    ? <MovieDetails showSearch={showSearch}/>
                    : <><Paragraph>netflixroulette</Paragraph>
                        <Button onClick={toggleModal}>+ ADD MOVIE</Button>
                        <ThemeProvider theme={ParagraphTitle}>
                            <Paragraph>FIND YOUR MOVIE</Paragraph>
                        </ThemeProvider>
                        <Input value={findMovie} onChange={(e) => setFindMovie(e.target.value)} placeholder="What do you want to watch?"/>
                        <ButtonSearch onClick={() => sortHandler(findMovie)}>SEARCH</ButtonSearch>
                        {
                            showModal ? (
                                <Modal>
                                    <ModalContent
                                        handleSubmit={handleSubmit}
                                        modalData={modalData}
                                        handleInput={handleInput}
                                        modalType="ADD"
                                        toggleModal={toggleModal}
                                    />
                                </Modal>
                            ) : null
                        }</>
                }
            </div>
        )
    
}

const mapStateToProps = state => {
    return {
        showMovieDetails: state.movie.show
    }
}

const mapDispatchToProps = dispatch => {
    return {
       fetchMovie: (show) => dispatch(fetchMovieRequest(show)),
       createMovie: (movieData) => dispatch(addMovie(movieData)),
       fetchMoviesRequest: (filters) => dispatch(fetchMovies(filters))
    }
}

Header.propTypes = {
    className: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
