import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignnup";
import Product from "./pages/Product";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="Login" element={<LoginSignup/>}/>
          <Route path="product/:id" element={<Product/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
