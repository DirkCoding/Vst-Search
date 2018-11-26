import React, { Component } from 'react'
import DropdownInstruments from './DropdownInstruments'
import DropdownManufacturer from './DropdownManufacturer'
import DropdownLibrary from './DropdownLibrary'
import HeaderStyling from './Header'
import FooterStyling from './Footer'
import Createcard from './Createcard'
import Priceslider from './Priceslider'
import styled from 'styled-components'

const AppWrapper = styled.section`
  border: 1px solid #000;
`

export class Home extends Component {
  render() {
    const {
      filteredLibraryData,
      searchChange,
      searchChangeManu,
      searchChangeLib,
      sliderChange,
      priceLimit
    } = this.props

    return (
      <React.Fragment>
        <AppWrapper>
          <HeaderStyling />
          <DropdownInstruments searchChange={searchChange} />
          <DropdownManufacturer searchChangeManu={searchChangeManu} />
          <DropdownLibrary searchChangeLib={searchChangeLib} />
          <Priceslider sliderChange={sliderChange} priceLimit={priceLimit} />
          <FooterStyling />
          {filteredLibraryData.map(libraryInformation => (
            <Createcard
              title={libraryInformation.title}
              company={libraryInformation.company}
              image={libraryInformation.image}
              url={libraryInformation.url}
              ensemblepatch={libraryInformation.ensemblepatch}
              price={libraryInformation.price}
              sections={libraryInformation.sections.join('-')}
            />
          ))}
        </AppWrapper>
      </React.Fragment>
    )
  }
}

export default Home
