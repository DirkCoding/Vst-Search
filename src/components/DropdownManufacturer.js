import React, { Component } from 'react'
// import styled from 'styled-components'
import libraryData from '../resources/library-data.json'
/*import { array } from '@storybook/addon-knobs'*/
import styled from 'styled-components'
import PropTypes from 'prop-types'

class DropdownManufacturer extends Component {
  static propTypes = {
    searchChangeManu: PropTypes.func.isRequired
  }
  render() {
    const { searchChangeManu } = this.props
    return (
      <div>
        <select onChange={searchChangeManu} placeholder="Choose a manufacturer">
          <option default value="all">
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
      </div>
    )
  }
}
export default DropdownManufacturer
