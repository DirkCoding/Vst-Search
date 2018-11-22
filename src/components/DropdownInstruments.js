import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'

const Dropdown = styled.section`
  display: grid;
  display: center;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  grid-column: 1 / 2;
`
const Label = styled.p`
  font-size: 23px;
  grid-template-rows: 1fr 1fr;
`

class DropdownInstruments extends Component {
  render() {
    const { searchChange } = this.props
    return (
      <Dropdown>
        <Label>Choose an instrument:</Label>
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
              <option>{instrument}</option>
            ))}
        </select>
      </Dropdown>
    )
  }
}
export default DropdownInstruments
