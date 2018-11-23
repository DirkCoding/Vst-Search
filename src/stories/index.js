import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { text, boolean, number } from '@storybook/addon-knobs'

import DropdownInstruments from '../components/DropdownInstruments'
import Createcard from '../components/Createcard'
import Home from '../components/Home'
// import StyleBox from './StyleBox'

storiesOf('DropdownInstruments', module).add('default', () => (
  <React.Fragment>
    <DropdownInstruments />
    <Createcard />
    <Home />
  </React.Fragment>
))
