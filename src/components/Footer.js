import React, { Component } from 'react'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
`

const FooterStyling = styled.section`
  text-align: center;
  /* box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4); */
  background: rgb(255, 255, 240);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
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
