import React, { Component } from 'react'
import libraryData from '../resources/library-data.json'
import Home from './Home'
class App extends Component {
  state = {
    libraryData: libraryData,
    dropdown: 'all',
    manufacturerDropdown: 'all',
    libraryDropdown: 'all',
    priceSlider: 0,
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
  inputChange = event => {
    this.setState({ inputField: event.target.value })
  }

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      console.log('hello')
      console.log(this.state.dropdown === 'all')
      console.log(this.state.manufacturerDropdown === 'all')
      console.log(this.state.libraryDropdown === 'all')
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
        parseInt(data.price) <= parseInt(this.state.priceSlider)
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
        inputChange={this.inputChange}
      />
    )
  }
}
export default App
