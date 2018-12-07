import React, { Component } from 'react'
import styled from 'styled-components'

const SearchFormWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
`
const SearchForm = styled.input`
  border: 1px solid;
  border: 1px solid rgb(211, 211, 211);
  font-size: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  outline: none;
  font-size: 12px;
  text-decoration-color: black;
  width: 50%;
  height: 50%;
  padding: 5px;
  margin: 5px;
  background-color: rgb(248, 248, 248);
`

class Searchfield extends Component {
  render() {
    const { onInputChange } = this.props
    return (
      <SearchFormWrapper>
        <SearchForm
          type="text"
          placeholder="Search items"
          onChange={onInputChange}
        />
      </SearchFormWrapper>
    )
  }
}
export default Searchfield
