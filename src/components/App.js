import React, { Component } from 'react'
import libraryData from '../resources/library-data.json'
import Home from './Home'

/*import Home from './Home'
import Config from './Config'*/

/*const Wrapper = styled.section`
  display: grid;
  grid-template-rows: auto 50px;
  height: 100vh;
  nav {
    display: flex;
  }
  a:any-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
    width: 100%;
    background: #efefef;
    &:first-child {
      border-right: 1px solid white;
    }
    &.active {
      background: deeppink;
      color: white;
    }
  }
`*/

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

  // // checkForInputField = (libraryData, searchTerm) => {
  // //   for (var attribute in libraryData) {
  // //     if (
  // //       libraryData.hasOwnProperty(attribute) &&
  // //       libraryData.attribute.includes(searchTerm)
  // //     )
  // //       return true
  // //   }
  // //   return false
  // }

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      // console.log('hello')
      // console.log(this.state.dropdown === 'all')
      // console.log(this.state.manufacturerDropdown === 'all')
      // console.log(this.state.libraryDropdown === 'all')
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
        // &&
        // // this.state.inputField !== '' &&
        // // this.checkForInputField(data, this.state.inputField)
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
        // inputChange={this.inputChange}
      />
    )
  }
}
export default App
