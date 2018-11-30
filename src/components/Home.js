import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Createcard from './Createcard'
import Dropdowns from './Dropdowns'
import Searchfield from './Searchfield'

export class Home extends Component {
  render() {
    const {
      filteredLibraryData,
      searchChange,
      searchChangeManu,
      searchChangeLib,
      sliderChange,
      priceLimit,
      inputChange
    } = this.props

    return (
      <React.Fragment>
        <Header />
        {/* <Searchfield /> */}
        <Dropdowns
          filteredLibraryData={filteredLibraryData}
          priceLimit={priceLimit}
          searchChange={searchChange}
          searchChangeManu={searchChangeManu}
          searchChangeLib={searchChangeLib}
          sliderChange={sliderChange}
          inputChange={inputChange}
        />

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
