import React from 'react'
import NavBar from './../components/NavBar'
import CardGallery from './../components/CardGallery'
import { MovieCounterStyles } from './../styles'
import PropTypes from 'prop-types';

const Main = ({ className }) => {
    return (
        <div className={className}>
            <NavBar/>
            <MovieCounterStyles/>
            <CardGallery/>
        </div>
    )
}

Main.propTypes = {
    className: PropTypes.string.isRequired,
}

export  { Main }