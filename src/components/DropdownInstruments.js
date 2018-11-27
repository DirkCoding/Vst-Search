import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

class DropdownInstruments extends Component {
  static propTypes = {
    searchChange: PropTypes.func.isRequired
  }
  render() {
    const { searchChange } = this.props
    return (
      <div>
        <select onChange={searchChange} placeholder="Choose an instrument">
          <option default>Select Instrument</option>
          {// get list of instruments
          libraryData
            .reduce(
              (instrumentList, libraryItem) =>
                instrumentList.concat(libraryItem.sections),
              []
            )
            .reduce((instrumentList, instrumentItem) => {
              if (instrumentList.indexOf(instrumentItem) === -1)
                instrumentList.push(instrumentItem)
              return instrumentList
            }, [])
            .sort((a, b) => (a < b ? -1 : 1))
            .map(instrument => (
              <option key={instrument}>{instrument}</option>
            ))}
        </select>
      </div>
    )
  }
}
export default DropdownInstruments
