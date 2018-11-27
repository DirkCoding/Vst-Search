import React, { Component } from 'react'
import styled from 'styled-components'

const Slider = styled.input`
  background: rgb(240, 123, 199);
  border: 1px solid #000;
  place-items: center;
`
const Eurobox = styled.section`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 8px;
  font-size: 10px;
`

class Priceslider extends Component {
  render() {
    const { sliderChange, priceLimit } = this.props
    return (
      <div>
        <Slider onChange={sliderChange} type="range" max="1000" />
        <Eurobox> max price in Euro: {priceLimit}</Eurobox>
      </div>
    )
  }
}
export default Priceslider
