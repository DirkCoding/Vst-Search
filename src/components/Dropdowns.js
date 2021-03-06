import React, { Component } from 'react'
import styled from 'styled-components'
import DropdownManufacturer from './DropdownManufacturer'
import DropdownInstruments from './DropdownInstruments'
import DropdownLibrary from './DropdownLibrary'
import Priceslider from './Priceslider'

const DropdownWrapper = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
  grid-template-rows: 1fr;
  justify-content: center;
  padding: 20px;
  margin: auto;
  height: 25%;
  border-radius: 8px;
`

export class Dropdowns extends Component {
  render() {
    const {
      searchChange,
      searchChangeManu,
      searchChangeLib,
      sliderChange,
      priceLimit,
      manufacturerDropdown
    } = this.props
    return (
      <DropdownWrapper>
        <DropdownInstruments searchChange={searchChange} />
        <DropdownManufacturer searchChangeManu={searchChangeManu} />
        <DropdownLibrary
          searchChangeLib={searchChangeLib}
          manufacturerDropdown={manufacturerDropdown}
        />
        <Priceslider
          sliderChange={sliderChange}
          priceLimit={priceLimit}
          sliderValue={this.props.sliderValue}
        />
      </DropdownWrapper>
    )
  }
}
export default Dropdowns
