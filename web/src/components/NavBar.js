import React, { useState } from 'react'
import { 
  TopNav,
  A,
  Active,
  Arrow,
  SortParagrapgh,
  DropDown,
  DropDownParagrapgh,
  DropDownContent,
  DropButton
} from './../styles'
import { NavOptions, ResultsSort } from './../__mocks__'
import { connect } from 'react-redux'
import { fetchMovies } from './../redux'

const NavBar = ({ fetchMoviesRequest }) => {

  const [sorting, setSorting] = useState('')

  const sortHandler = (name) => {
    setSorting(name)
    if (name === 'RATING') {
      fetchMoviesRequest('?sortBy=vote_average&sortOrder=desc')
    } else if (name === 'RELEASE DATE') {
      fetchMoviesRequest('?sortBy=release_date&sortOrder=desc')
    } else {
      fetchMoviesRequest(`?search=${name.toLowerCase()}&searchBy=genres`)
    }
  }

    return (
      <TopNav>
        {
          NavOptions.map(option => {
            return (
              option.active 
              ? <Active key={option.id}>{option.name}</Active>
              : <A onClick={() => sortHandler(option.name)}  key={option.id}>{option.name}</A>
            )
          }) 
        }
        <DropDown>
          <DropButton>{sorting}<Arrow/></DropButton>
          <DropDownContent>
            {
              ResultsSort.map(option => <DropDownParagrapgh onClick={() => sortHandler(option.name)} key={option.id}>{option.name}</DropDownParagrapgh>) 
            }
          </DropDownContent>
        </DropDown>
        <SortParagrapgh>SORT BY</SortParagrapgh>
      </TopNav>  
    )
}

const mapDispatchToProps = dispatch => {
  return {
      fetchMoviesRequest: (filters) => dispatch(fetchMovies(filters))
  }
}

const mapStateToProps = state => {
  return {
      movies: state.movie.movies,
      load: state.movie.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)