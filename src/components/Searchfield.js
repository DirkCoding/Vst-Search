import React, { Component } from 'react'
import libraryData from '../resources/library-data.json'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchFormWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 10px;
`
const SearchForm = styled.input`
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  outline: none;
  color: #fff;
`

class Searchfield extends Component {
  render() {
    const { inputChange } = this.props
    return (
      <SearchFormWrapper>
        <SearchForm
          type="text"
          placeholder="Search item"
          onChange={inputChange}
        />
      </SearchFormWrapper>
    )
  }
}
export default Searchfield
