import React from 'react'
import ReactDOM from 'react-dom'
import Router from './components/RouteSwitch'
import { BrowserRouter } from "react-router-dom"

<BrowserRouter basename={window.location.pathname || ''}>
  <Router exact path="/StudyBeats/" component={Index} />
</BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
