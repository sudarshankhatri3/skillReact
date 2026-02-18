import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/common/header'
import Login  from './component/common/login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Login/>

  </StrictMode>,
)
