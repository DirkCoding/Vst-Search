import React, { Component } from 'react'
// import styled from 'styled-components'

/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'

const Header = styled.section`
  display: grid;
  margin: 25px auto;
  padding: 10px 25px 25px 25px;
  background: white;
  text-align: center;
  width: 50vw;
  height: 100px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
  background: rgb(220, 220, 220);
`

const Headline = styled.p`
  font-size: 24px;
`

class HeaderStyling extends Component {
  render() {
    return (
      <Header>
        <Headline>VST-SEARCH</Headline>
      </Header>
    )
  }
}

export default HeaderStyling
