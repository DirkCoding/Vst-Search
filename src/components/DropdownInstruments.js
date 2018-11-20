import React, { Component } from 'react'
import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
import { array } from '@storybook/addon-knobs'

class DropdownInstruments extends React.Component {
  render() {
    return (
      <div>
        <label for="Instrument Select">Choose an instrument:</label>
        <select placeholder="Choose an instrument">
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
            .map(instrument => (
              <option>{instrument}</option>
            ))}
        </select>
      </div>
    )
  }
}
export default DropdownInstruments
