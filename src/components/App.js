import React, { Component } from 'react'
// import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// import DropdownInstruments from './DropdownInstruments'
// import Createcard from './Createcard'
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
/*class CallInstrument extends Component {
  state = {
    libraryData: libraryData,
    DropdownInstruments: ''
  }
  chooseInstrument = event => {
    this.setState({ dropdown: event.target.value })
  }*/

class App extends Component {
  state = {
    libraryData: libraryData,
    searchfield: ''
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredLibraryData = this.state.libraryData.filter(data => {
      return data.sections.includes(this.state.searchfield)
    })

    return (
      <Home
        filteredLibraryData={filteredLibraryData}
        searchChange={this.onSearchChange}
      />
    )
  }
}
export default App
