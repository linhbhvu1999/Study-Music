import React from 'react'
import Router from './components/RouteSwitch'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router />
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
