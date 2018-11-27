import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Dropdown = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  padding: 10px 25px 25px 25px;
  background: white;
  width: 50vw;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(180, 180, 180, 0.4);
  border: 1px solid #000;
`
const Label = styled.p`
  font-size: 23px;
  grid-column: 1 / 3;
  grid-column: 1 / 3;
`
class DropdownManufacturer extends Component {
  static propTypes = {
    searchChangeManu: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeManu } = this.props
    return (
      <Dropdown>
        <Label>Choose a manufacturer:</Label>
        <select onChange={searchChangeManu} placeholder="Choose a manufacturer">
          <option default value="">
            Select Manufacturer
          </option>
          {// get list of instruments
          libraryData
            .reduce(
              (manufacturerList, companyItem) =>
                manufacturerList.concat(companyItem.company),
              []
            )
            .reduce((manufacturerList, companyItem) => {
              if (manufacturerList.indexOf(companyItem) === -1)
                manufacturerList.push(companyItem)
              return manufacturerList
            }, [])
            .sort((a, b) => (a < b ? -1 : 1))
            .map(company => (
              <option key={company}>{company}</option>
            ))}
        </select>
      </Dropdown>
    )
  }
}
export default DropdownManufacturer
