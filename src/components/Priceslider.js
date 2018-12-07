import React, { Component } from 'react'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  padding: 5px;
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.4);
  border: 1px solid rgb(211, 211, 211);
  outline: none;
  background-color: rgb(248, 248, 248);
`

const Slider = styled.input`
  background: rgb(240, 123, 199);
  border: 1px solid #000;
  place-items: center;
`
const Eurobox = styled.section`
  padding: 5px;
  font-size: 10px;
  background: (192, 192, 192);
  font-size: 12px;
`

class Priceslider extends Component {
  render() {
    const { sliderChange, priceLimit } = this.props

    return (
      <SliderWrapper>
        <Eurobox> max price in Euro: {priceLimit}</Eurobox>
        <Slider onChange={sliderChange} type="range" min="349" max="1000" />
      </SliderWrapper>
    )
  }
}
export default Priceslider
