import React, { Component } from 'react'

import styled from 'styled-components'

const FooterStyling = styled.section`
  display: grid;
  margin: 25px auto;
  padding: 10px 25px;
  text-align: center;
  width: 90vw;
  height: 10vh;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border-radius: 18px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`

const FooterText = styled.p`
  font-size: 24px;
`

class Footer extends Component {
  render() {
    return (
      <FooterStyling>
        <FooterText>&#x24B8; 2018 Kim-Dirk Linsenmeier</FooterText>
      </FooterStyling>
    )
  }
}

export default Footer
