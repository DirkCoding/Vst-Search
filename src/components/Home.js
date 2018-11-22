import React, { Component } from 'react'
import DropdownInstruments from './DropdownInstruments'
import Createcard from './Createcard'

export class Home extends Component {
  render() {
    const { filteredLibraryData, searchChange } = this.props
    return (
      <React.Fragment>
        <DropdownInstruments searchChange={searchChange} />

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
