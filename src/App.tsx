import React from 'react'
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <ProductsList /> } />
        <Route path="/product/:id" element={ <Product /> } />
      </Routes>
    </>
  )
}

export default App
