import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './component/common/header'
import Login  from './component/common/login'
import Practice from './component/common/practice'
import ShowProduct from './component/common/assignment'
import Greeting from './component/common/login'
import Topsection from './component/common/headers'
import Counter from './component/common/counter'
import ParentData from './component/common/practice'
// import Cart from './component/common/cartProduct'
import FormCmp from './component/common/formHandler'
import Cart from './component/common/fullProduct'
import ProductCrud from './component/common/crud'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    {/* <ParentData/> */}
    {/* <Counter/>
    <Cart/> */}
    {/* <FormCmp/> */}
    {/* <Cart/> */}
    <ProductCrud/>
   
  </StrictMode>,
)
