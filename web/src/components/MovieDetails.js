import React, { useEffect, useState } from 'react'
import { 
    DetailsContainer,
    Paragraph,
    ImgDetailsContainer,
    ParDetailsContainer,
    DetailsTitle,
    DetailsSubTitle,
    DetailsSpan,
    ImgDetails,
    CircleWithText,
    HeaderSearchIcon,
} from './../styles'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'


const MovieDetails = ({ img, title, rating, genre, releaseDate, runtime, overview, showSearch }) => {
    
    const [overView, setOverview] = useState([])

    useEffect(() => {
        let ov = []
        const numberOfRows = overview.length / 170
        for (var i = 0; i < numberOfRows; i++) {
            ov.push(overview.substring(i === 0 ? i : 170 * i , i === 0 ? 170 : 170 * (i + 1)))
        }
        setOverview(ov)
    }, [overview])
    
    return (
        <>
            <Paragraph>netflixroulette</Paragraph>
            <HeaderSearchIcon color='#F65261' size="30" onClick={showSearch} />
            <DetailsContainer>
                <ImgDetailsContainer><ImgDetails src={img} alt="details" /></ImgDetailsContainer>
                <ParDetailsContainer>
                    <DetailsTitle>{title}<CircleWithText>{rating}</CircleWithText></DetailsTitle>
                    <DetailsSubTitle>{genre}</DetailsSubTitle>
                    <DetailsSubTitle><DetailsSpan>{releaseDate}</DetailsSpan>&nbsp;&nbsp;&nbsp;<DetailsSpan>{runtime}</DetailsSpan></DetailsSubTitle>
                    {
                            overView
                            ? <>
                                {
                                    overView.map(o => <DetailsSubTitle key={Math.random()}>{o}</DetailsSubTitle>)
                                }
                              </>
                            : null
                        } 
                </ParDetailsContainer>
            </DetailsContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        ...state.movie
    }
}

MovieDetails.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
}

MovieDetails.defaultProps = {
    img: 'https://unsplash.it/800/600?image=11',
    title: 'Pulp Fiction',
    rating: '4.3',
    genre: 'Oscar winning Movie',
    releaseDate: '1994',
    runtime: 154,
    overview: 'A description...'
};

export default connect(mapStateToProps)(MovieDetails)
