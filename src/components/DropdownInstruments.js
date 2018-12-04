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
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  /* height: 25px; */
  padding: 5px;
  color: black;
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.2);
  border: 1px solid rgb(211, 211, 211);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`

class DropdownInstruments extends Component {
  static propTypes = {
    searchChange: PropTypes.func.isRequired
  }
  render() {
    const { searchChange } = this.props
    return (
      <SelectWrapper>
        <Select onChange={searchChange} placeholder="Choose an instrument">
          <option value="all" default>
            Select Instrument
          </option>
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
        </Select>
      </SelectWrapper>
    )
  }
}
export default DropdownInstruments
