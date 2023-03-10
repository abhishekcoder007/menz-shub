import React from 'react'
import ReactDOM from 'react-dom/client'

import { RecoilRoot } from 'recoil';
import {BrowserRouter} from "react-router-dom";
import App from './App';

// import Myproductcard from './component/myproductcard/Myproductcard';
// import Home from './pages/Home';
// import Product from './pages/product/Product';


// import Shoes from './pages/shoes/Shoes';
// import Cart from './pages/cart/Cart';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <RecoilRoot>
 <App/>

 {/* <Cart/> */}
  </RecoilRoot>
  </BrowserRouter>
  </React.StrictMode>,
)
