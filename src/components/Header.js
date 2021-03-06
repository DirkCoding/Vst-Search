import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  margin: 20px;
`

const Header = styled.section`
  border-bottom: 1px solid #000;
  border-color: rgb(184, 134, 11);
  text-align: center;
`

const Headline = styled.p`
  font-size: 25px;
`

class HeaderStyling extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Headline>VST-SEARCH</Headline>
        </Header>
      </Wrapper>
    )
  }
}

export default HeaderStyling
