import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Dropdown = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 10px 25px 25px 25px;
  background: white;
  max-width: 800px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`
const Label = styled.p`
  font-size: 23px;
  grid-column: 1 / 3;
  grid-column: 1 / 3;
`

class DropdownInstruments extends Component {
  static propTypes = {
    searchChange: PropTypes.func.isRequired
  }
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
