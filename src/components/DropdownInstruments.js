import React, { Component } from 'react'
import styled from 'styled-components'
import libraryData from '../resources/library-data'
import { array } from '@storybook/addon-knobs'

class DropdownInstruments extends React.Component {
  instruments = ['Trombone', 'Horn', 'Trumpet']
  render() {
    return (
      <div>
        <label for="Instrument Select">Choose a instrument:</label>
        <select>
          {this.instruments.map(instrument => (
            <option>{instrument}</option>
          ))}
        </select>
      </div>
    )
  }
}
export default DropdownInstruments
