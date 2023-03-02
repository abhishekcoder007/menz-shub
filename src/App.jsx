// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import Nav from "./component/navbar/Nav"
import React from "react";
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Shoes from "./pages/shoes/Shoes";
import Shirts from "./pages/myshirts/Shirts"
import Pants from "./pages/pants/Pants";
import Product from "./pages/product/Product";
import Mycart from "./pages/mycart/Mycart";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signin/Signup";
import Myproduct from "./pages/myproduct/Myproduct";
import {Signindata} from "./recoil/toggledata/Signdata"
import { useRecoilValue } from "recoil";
import Productdetail from "./pages/productdetail/Productdetail";
import Payment from "./pages/payment/Payment";


function App() {
  const data=useRecoilValue(Signindata)

  return (
    <div className="App">
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/shoes"  element={<Shoes/>}/>
      <Route path="/shirts"  element={<Shirts/>}/>
      <Route path="/trousers"  element={<Pants/>}/>
      <Route path="/allitems"  element={<Product/>}/>
     <Route path="/cart"  element= {data?<Mycart/>:<Signin/>}/>
      <Route path="/login" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/myproduct" element={<Myproduct/>}/>
      <Route path="/items/:name/:id" element={<Productdetail/>}/>
      <Route path="/payment" element={<Payment/>}/>
     
     </Routes>
    </div>
  )
}

export default App
