import React, { Component } from 'react'
import libraryData from '../resources/library-data.json'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

const SelectWrapper = styled.section`
  font-family: fontello;
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
  }
`

const Select = styled.select`
  width: 100%;
  padding: 5px;
  border: 1px solid;
  font-size: 12px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.2);
  border: 1px solid rgb(211, 211, 211);
  outline: none;
  cursor: pointer;
  position: relative;
`

class DropdownLibrary extends Component {
  static propTypes = {
    searchChangeLib: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeLib, manufacturerDropdown } = this.props
    return (
      <SelectWrapper>
        <Select onChange={searchChangeLib} placeholder="Choose a library">
          <option value="all" default>
            Select Library
          </option>

          {// get list of libraries
          libraryData
            .reduce(
              (libraryList, libraryItem) =>
                libraryList.concat({
                  title: libraryItem.title,
                  manufacturer: libraryItem.company
                }),
              []
            )
            .reduce((libraryList, libraryItem) => {
              if (libraryList.indexOf(libraryItem) === -1)
                libraryList.push(libraryItem)
              return libraryList
            }, [])
            .sort((a, b) => (a.title < b.title ? -1 : 1))
            .map(library =>
              manufacturerDropdown === library.manufacturer ||
              manufacturerDropdown === 'all' ? (
                <option key={library.title}>{library.title}</option>
              ) : (
                <option key={library.title} disabled>
                  {library.title}
                </option>
              )
            )}
        </Select>
        <FontAwesomeIcon icon="chevron-down" />
      </SelectWrapper>
    )
  }
}
export default DropdownLibrary
