import React, { Component } from 'react'
import styled from 'styled-components'

const Slidersection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 25px;
  background: white;
  width: 50vw;
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`

const Slider = styled.input`
  background: rgb(240, 123, 199);
  border: 1px solid #000;
  place-items: center;
`
const Eurobox = styled.section`
  border: 1px solid #000;
  border-radius: 8px;

  grid-column: 2 / 4;
`
const Label = styled.p`
  font-size: 23px;
  grid-template-rows: 1fr 1fr;
`

class Priceslider extends Component {
  render() {
    const { sliderChange, priceLimit } = this.props
    return (
      <Slidersection>
        <Label>Set price limit:</Label>
        <Slider onChange={sliderChange} type="range" max="1000" />
        <Eurobox> max price in Euro: {priceLimit}</Eurobox>
      </Slidersection>
    )
  }
}
export default Priceslider
