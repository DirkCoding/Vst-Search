import React, { Component } from 'react'
// import styled from 'styled-components'
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import DropdownInstruments from './DropdownInstruments'
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

export default class App extends Component {
  render() {
    return <DropdownInstruments />
  }
}
