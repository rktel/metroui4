import React from 'react'
import { render } from 'react-dom'

import App from '../imports/App'

Meteor.startup(() => render(<App />, document.getElementById('root')))