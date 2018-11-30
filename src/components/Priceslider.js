import React, { Component } from 'react'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  padding: 5px;
  color: black;
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  outline: none;
`

const Slider = styled.input`
  background: rgb(240, 123, 199);
  border: 1px solid #000;
  place-items: center;
`
const Eurobox = styled.section`
  padding: 5px;
  font-size: 10px;
`

class Priceslider extends Component {
  render() {
    const { sliderChange, priceLimit } = this.props
    return (
      <SliderWrapper>
        <Eurobox> max price in Euro: {priceLimit}</Eurobox>
        <Slider onChange={sliderChange} type="range" max="1000" />
      </SliderWrapper>
    )
  }
}
export default Priceslider
