import React, { Component } from 'react'
// import styled from 'styled-components'

class Priceslider extends Component {
  //   state = {
  //     r: 0
  //   }

  //   update = event => {
  //     this.setState({
  //       r: event.target.value
  //     })
  //   }
  render() {
    const { sliderChange } = this.props
    return (
      <div style={{ background: `rgb(240, 123, 199)` }}>
        <input onChange={sliderChange} type="range" max="1000" />
      </div>
    )
  }
}
export default Priceslider
