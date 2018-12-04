import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectWrapper = styled.section`
  font-family: fontello;
  content: '\f107';
  font-size: 20px;
  right: 15px;
  top: 10px;
  color: #fff;
  ::before {
    font-family: fontello;
    content: '\f107';
    font-size: 20px;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #fff;
  }
`

const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 5px;
  color: black;
  border: 1px solid;
  border-color: rgb(184, 134, 11);
  font-size: 12px;
  box-shadow: 0 8px 16px rgba(211, 211, 211, 0.2);
  border: 1px solid rgb(211, 211, 211);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`

class DropdownManufacturer extends Component {
  static propTypes = {
    searchChangeManu: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeManu } = this.props
    return (
      <SelectWrapper>
        <Select onChange={searchChangeManu} placeholder="Choose a manufacturer">
          <option default value="all">
            Select Manufacturer
            {/* <FontAwesomeIcon icon="faStroopwafel" /> */}
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
        </Select>
      </SelectWrapper>
    )
  }
}
export default DropdownManufacturer
