import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/common/header'
import Login  from './component/common/login'
import Practice from './component/common/practice'
import ShowProduct from './component/common/assignment'
import Greeting from './component/common/login'
import Topsection from './component/common/headers'
import Counter from './component/common/counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/>
    <Login/>
    <Practice/> */}
    {/* <ShowProduct/>
    <Greeting/> */}
    {/* <Topsection/> */}
    <Counter/>

  </StrictMode>,
)
