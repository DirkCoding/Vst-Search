import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.section`
  margin: 25px auto;
  padding: 25px;
  background: white;
  max-width: 50vw;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`

const Title = styled.h1`
  font-size: 23px;
  grid-column: 2 / 3;
`
const Company = styled.h2`
  font-size: 18px;
  grid-column: 2 / 3;
`
const Paragraph = styled.p`
  font-size: 12px;
  grid-column: 2 / 3;
`

const Hyperlink = styled.a`
  font-size: 12px;
  grid-column: 2 / 3;
`
const Image = styled.img`
  width: 150px;
  height: 150px;
  background-position: 50% 50%;
  background-size: cover;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  margin: 20px;
`

const Libraryheader = styled.section``
const Librarytext = styled.section``
const Information = styled.section``

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
        <Information>
          <Libraryheader data-cy="Libraryheader">
            <Title>{title}</Title>
            <Company>{company}</Company>
          </Libraryheader>
          <Librarytext>
            <Paragraph>Instruments included: {sections}</Paragraph>
            <Paragraph>Ensemble Patch available: {ensemblepatch}</Paragraph>
            <Paragraph>Price: {price}</Paragraph>
            <Hyperlink>Link to manufacturer: {url}</Hyperlink>
          </Librarytext>
        </Information>
        <Image src={image} />
      </Card>
    )
  }
}

export default Createcard
