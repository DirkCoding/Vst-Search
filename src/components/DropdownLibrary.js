import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectWrapper = styled.section`
  font-family: fontello;
  content: '\f107';
  font-size: 20px;
  right: 15px;
  top: 10px;
  color: #fff;
  ::before {
    font-family: fontello;
    content: '\f107';
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #fff;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 5px;
  color: black;
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
`

class DropdownLibrary extends Component {
  static propTypes = {
    searchChangeLib: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeLib } = this.props
    return (
      <SelectWrapper>
        <Select onChange={searchChangeLib} placeholder="Choose a library">
          <option value="all" default>
            Select Library
          </option>
          {// get list of instruments
          libraryData
            .reduce(
              (libraryList, libraryItem) =>
                libraryList.concat(libraryItem.title),
              []
            )
            .reduce((libraryList, libraryItem) => {
              if (libraryList.indexOf(libraryItem) === -1)
                libraryList.push(libraryItem)
              return libraryList
            }, [])
            .sort((a, b) => (a < b ? -1 : 1))
            .map(library => (
              <option key={library}>{library}</option>
            ))}
        </Select>
      </SelectWrapper>
    )
  }
}
export default DropdownLibrary
