import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

class DropdownLibrary extends Component {
  static propTypes = {
    searchChangeLib: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeLib } = this.props
    return (
      <div>
        <select onChange={searchChangeLib} placeholder="Choose a library">
          <option value="all" default>
            Select library
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
        </select>
      </div>
    )
  }
}
export default DropdownLibrary
