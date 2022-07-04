import React from 'react'
import Router from './components/RouteSwitch'
import { BrowserRouter } from "react-router-dom"

<BrowserRouter basename={window.location.pathname || ''}>
  <Router exact path="/StudyBeats/" component={Index} />
</BrowserRouter>

