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

  filterByDropdown = (dataField, dropdownSelection) => {
    return dropdownSelection === 'all'
      ? true
      : dataField.includes(dropdownSelection)
  }

  filterByInputField = (dataAttribute, input) => {
    input = input.trim().toLowerCase()
    return input === '' ? true : dataAttribute.toLowerCase().includes(input)
  }

  filterAllByInputField = (dataAttributeOfTypeList, input) => {
    let matches = false
    dataAttributeOfTypeList.forEach(item => {
      if (this.filterByInputField(item, input)) {
        matches = true
      }
    })
    return matches
  }

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      return (
        this.filterByDropdown(data.sections, this.state.dropdown) &&
        this.filterByDropdown(data.company, this.state.manufacturerDropdown) &&
        this.filterByDropdown(data.title, this.state.libraryDropdown) &&
        parseInt(data.price) <= parseInt(this.state.priceSlider) &&
        (this.filterByInputField(data.title, this.state.inputField) ||
          this.filterByInputField(data.company, this.state.inputField) ||
          this.filterAllByInputField(data.sections, this.state.inputField))
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
