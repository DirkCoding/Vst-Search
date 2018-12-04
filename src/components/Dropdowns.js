import React, { Component } from 'react'
import styled from 'styled-components'
import DropdownManufacturer from './DropdownManufacturer'
import DropdownInstruments from './DropdownInstruments'
import DropdownLibrary from './DropdownLibrary'
import Priceslider from './Priceslider'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

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
