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
    dropdown: '',
    manufacturerDropdown: '',
    libraryDropdown: '',
    priceSlider: 0
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

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      return (
        data.sections.includes(this.state.dropdown) &&
        (this.state.manufacturerDropdown === 'all'
          ? true
          : data.company.includes(this.state.manufacturerDropdown)) &&
        (this.state.manufacturerDropdown === 'all'
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
      />
    )
  }
}
export default App
