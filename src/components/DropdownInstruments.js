import React, { Component } from 'react'
import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
import { array } from '@storybook/addon-knobs'

class DropdownInstruments extends React.Component {
  render() {
    return (
      <div>
        <label for="Instrument Select">Choose an instrument:</label>
        <select>
          {libraryData.map(instrument => (
            <option>{instrument.sections.map}</option>
          ))}
        </select>
      </div>
    )
  }
}
export default DropdownInstruments
