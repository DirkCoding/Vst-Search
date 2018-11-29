import React, { Component } from 'react'
// import styled from 'styled-components'

/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  margin: 20px;
`

const Header = styled.section`
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
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
