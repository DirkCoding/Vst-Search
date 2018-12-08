import React, { Component } from 'react'
import libraryData from '../resources/library-data.json'
import Home from './Home'
class App extends Component {
  state = {
    libraryData: libraryData,
    dropdown: 'all',
    manufacturerDropdown: 'all',
    libraryDropdown: 'all',
    priceSlider: 899,
    inputField: ''
  }

  sliderChange = event => {
    this.setState({ priceSlider: event.target.value })
  }
  onSearchChange = event => {
    this.setState({ dropdown: event.target.value })
  }

  onSearchChangeManu = event => {
    this.setState({ manufacturerDropdown: event.target.value })
  }
  onSearchChangeLib = event => {
    this.setState({ libraryDropdown: event.target.value })
  }
  onInputChange = event => {
    this.setState({ inputField: event.target.value })
  }

  checkSections = instruments => {
    let matches = false
    instruments.forEach(instrument => {
      if (
        instrument
          .toLowerCase()
          .includes(this.state.inputField.trim().toLowerCase())
      ) {
        matches = true
      }
    })
    return matches
  }

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      return (
        (this.state.dropdown === 'all'
          ? true
          : data.sections.includes(this.state.dropdown)) &&
        (this.state.manufacturerDropdown === 'all'
          ? true
          : data.company.includes(this.state.manufacturerDropdown)) &&
        (this.state.libraryDropdown === 'all'
          ? true
          : data.title.includes(this.state.libraryDropdown)) &&
        parseInt(data.price) <= parseInt(this.state.priceSlider) &&
        (this.state.inputField.trim() === ''
          ? true
          : data.title
              .toLowerCase()
              .includes(this.state.inputField.trim().toLowerCase()) ||
            data.company
              .toLowerCase()
              .includes(this.state.inputField.trim().toLowerCase()) ||
            this.checkSections(data.sections))
      )
    })

    return (
      <Home
        filteredLibraryData={filteredLibraryData}
        priceLimit={this.state.priceSlider}
        searchChange={this.onSearchChange}
        searchChangeManu={this.onSearchChangeManu}
        searchChangeLib={this.onSearchChangeLib}
        sliderChange={this.sliderChange}
        sliderValue={this.sliderValue}
        onInputChange={this.onInputChange}
        manufacturerDropdown={this.state.manufacturerDropdown}
      />
    )
  }
}
export default App
