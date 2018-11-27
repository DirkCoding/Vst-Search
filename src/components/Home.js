import React, { Component } from 'react'
// import DropdownInstruments from './DropdownInstruments'
// import DropdownManufacturer from './DropdownManufacturer'
// import DropdownLibrary from './DropdownLibrary'
import Header from './Header'
import Footer from './Footer'
import Createcard from './Createcard'
// import Priceslider from './Priceslider'
import Dropdowns from './Dropdowns'
import styled from 'styled-components'

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
        <Header />
        <Dropdowns
          filteredLibraryData={filteredLibraryData}
          priceLimit={priceLimit}
          searchChange={searchChange}
          searchChangeManu={searchChangeManu}
          searchChangeLib={searchChangeLib}
          sliderChange={sliderChange}
        />
        {/* <DropdownInstruments searchChange={searchChange} />
          <DropdownManufacturer searchChangeManu={searchChangeManu} />
          <DropdownLibrary searchChangeLib={searchChangeLib} />
          <Priceslider sliderChange={sliderChange} priceLimit={priceLimit} /> */}

        {filteredLibraryData.map(libraryInformation => (
          <Createcard
            key={libraryInformation.company + libraryInformation.title}
            title={libraryInformation.title}
            company={libraryInformation.company}
            image={libraryInformation.image}
            url={libraryInformation.url}
            ensemblepatch={libraryInformation.ensemblepatch}
            price={libraryInformation.price}
            sections={libraryInformation.sections.join('-')}
          />
        ))}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Home
