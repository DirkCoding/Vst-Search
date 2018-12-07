import React, { Component } from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

library.add(faMusic)

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  margin: 25px auto;
  padding: 25px;
  height: auto;
  background: white;
  max-width: 100vh;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.4);
  border: 1px solid rgb(211, 211, 211);
  border-top: rgb(184, 134, 11);
  background: rgb(220 220 220);
  border-radius: 8px;
`

const FooterStyling = styled.section`
  font-size: 45px;
  color: rgb(184, 134, 11);
  border-radius: 8px;
`

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <FooterStyling>
          <FontAwesomeIcon icon="music" />
        </FooterStyling>
      </Wrapper>
    )
  }
}

export default Footer
