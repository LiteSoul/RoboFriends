import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import 'tachyons'
// Components
import CardList from './CardList'
import robots from './robots'

ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'))
registerServiceWorker()
