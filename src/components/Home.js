import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Createcard from './Createcard'
import Dropdowns from './Dropdowns'

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
