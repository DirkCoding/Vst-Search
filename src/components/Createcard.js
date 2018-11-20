import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px 40px;
  align-items: center;
  margin: 25px auto;
  padding: 25px;
  background: white;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
`
const Title = styled.h1`
  font-size: 23px;
  grid-column: 1 / 8;
`
const Company = styled.h2`
  font-size: 18px;
  grid-column: 1/6;
`
const Paragraph = styled.p`
  font-size: 12px;
  grid-column: 1/4;
`

const Hyperlink = styled.a`
  font-size: 12px;
  grid-column: 1/4;
`
const Image = styled.img`
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

class Createcard extends Component {
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
        <Title>Library: {title}</Title>
        <Company>Company: {company}</Company>
        <Image src={image} />
        <Hyperlink>Link to manufacturer: {url}</Hyperlink>
        <Paragraph>Ensemble Patch available: {ensemblepatch}</Paragraph>
        <Paragraph>Price: {price}</Paragraph>
        <Paragraph>Instruments included: {sections}</Paragraph>
      </Card>
    )
  }
}

export default Createcard
