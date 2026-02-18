import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/layout/header'
import { Hamburger } from './component/layout/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
