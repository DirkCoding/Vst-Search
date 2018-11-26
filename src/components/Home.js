import React, { Component } from 'react'
import DropdownInstruments from './DropdownInstruments'
import DropdownManufacturer from './DropdownManufacturer'
import DropdownLibrary from './DropdownLibrary'
import Createcard from './Createcard'
import Priceslider from './Priceslider'

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
        <DropdownInstruments searchChange={searchChange} />
        <DropdownManufacturer searchChangeManu={searchChangeManu} />
        <DropdownLibrary searchChangeLib={searchChangeLib} />
        <Priceslider sliderChange={sliderChange} priceLimit={priceLimit} />

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
      </React.Fragment>
    )
  }
}

export default Home
