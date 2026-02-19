import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/common/header'
import Login  from './component/common/login'
import Practice from './component/common/practice'
import ShowProduct from './component/common/assignment'
import Greeting from './component/common/login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/>
    <Login/>
    <Practice/> */}
    {/* <ShowProduct/> */}
    <Greeting/>

  </StrictMode>,
)
