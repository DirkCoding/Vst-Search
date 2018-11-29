import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  margin: 20px;
`

const FooterStyling = styled.section`
  padding: 10px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`

const FooterText = styled.p`
  font-size: 12px;
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterStyling>
          <FooterText>&#x24B8; 2018 Kim-Dirk Linsenmeier</FooterText>
        </FooterStyling>
      </Wrapper>
    )
  }
}

export default Footer
