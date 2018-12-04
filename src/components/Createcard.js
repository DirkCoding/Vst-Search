import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.section`
  display: flex;
  flex-direction: row;
  margin: 25px auto;
  padding: 25px;
  height: auto;
  background: white;
  max-width: 100vh;
  min-width: 100px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.4);
  border: 1px solid rgb(211, 211, 211);
  background: rgb(220 220 220);
`

const Title = styled.h1`
  font-size: 23px;
`
const Company = styled.h2`
  font-size: 18px;
`
const Paragraph = styled.p`
  flex-direction: row;
  font-size: 12px;
  white-space: pre-line;
`

const Image = styled.img`
  justify-content: flex-start;
  background-size: cover;
  padding-right: 10px;
  padding-top: 10px;
  max-width: 170px;
  max-height: 210px;
`

const Libraryheader = styled.section`
  /* justify-content: center; */
`
const Librarytext = styled.section``

const Information = styled.section`
  justify-content: space-between;
  padding-left: 10px;
`
const Hyperlink = styled.a`
  font-size: 12px;
`

const Price = styled.span`
  flex-direction: flex-end;
  display: inline;
`

class Createcard extends Component {
  static propTypes = {
    information: PropTypes.string
  }
  render() {
    const {
      title,
      company,
      image,
      url,
      ensemblepatch,
      price,
      sections
    } = this.props

    return (
      <Card>
        <Image src={image} />
        <Information>
          <Libraryheader data-cy="Libraryheader">
            <Title>{title}</Title>
            <Company>{company}</Company>
          </Libraryheader>
          <Librarytext>
            <Paragraph>Instruments included: {sections}</Paragraph>
            <Paragraph>Ensemble Patch available: {ensemblepatch}</Paragraph>
            <Paragraph>
              Price in Euro:<Price> {price}</Price>
            </Paragraph>
            <Hyperlink>
              <a href="/{url}" target="_blank">
                Order here
              </a>
            </Hyperlink>
          </Librarytext>
        </Information>
      </Card>
    )
  }
}

export default Createcard
