import React, { Component } from 'react'
import styled from 'styled-components'
import DropdownManufacturer from './DropdownManufacturer'
import DropdownInstruments from './DropdownInstruments'
import DropdownLibrary from './DropdownLibrary'
import Priceslider from './Priceslider'

const DropdownWrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin: auto;
  /* background: rgb(255, 235, 205); */
  max-width: 90vw;
  height: 25%;
  /* border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000; */
`

export class Dropdowns extends Component {
  render() {
    const {
      searchChange,
      searchChangeManu,
      searchChangeLib,
      sliderChange,
      priceLimit
    } = this.props
    return (
      <DropdownWrapper>
        <DropdownInstruments searchChange={searchChange} />
        <DropdownManufacturer searchChangeManu={searchChangeManu} />
        <DropdownLibrary searchChangeLib={searchChangeLib} />
        <Priceslider sliderChange={sliderChange} priceLimit={priceLimit} />
      </DropdownWrapper>
    )
  }
}
export default Dropdowns
