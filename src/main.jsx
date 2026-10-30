import { render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AppRoutes from './route.jsx'

render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('app')
)
