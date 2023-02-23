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


function App() {
  

  return (
    <div className="App">
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/shoes"  element={<Shoes/>}/>
      <Route path="/shirts"  element={<Shirts/>}/>
      <Route path="/trousers"  element={<Pants/>}/>
      <Route path="/allitems"  element={<Product/>}/>
     </Routes>
    </div>
  )
}

export default App
