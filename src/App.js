import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist";
import Checkout from "./pages/checkout";
import UserLogin from "./pages/UserLogin";

function App() {
  const [cart, setCart] = useState([]); // ------
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, op) =>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id===item.id) ind = index;
    })
    const tempArr = cart ; 
    tempArr[ind].amount += op;
    if(tempArr[ind].amount === 0){
      tempArr[ind].amount = 1 
    }
    setCart([...tempArr])
  }


  const [wishlist, wishlistCart] = useState([])

  const handleWishlist = (item) => {
    let isPresent = false;
    wishlist.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    wishlistCart([...wishlist, item]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar size={cart.length} wishlistSize = {wishlist.length} war={warning} />
        <Routes>
        <Route path="/"element={<UserLogin/>}/>
          <Route
            path="/shop"
            element={
              <Shop handleClick={handleClick} handleWishlist={handleWishlist} />
            }
          />
          <Route path="/wishlist" element={<Wishlist wishlist = {wishlist} wishlistCart={wishlistCart} />} />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
            }
          />
          <Route path="/checkout" element={<Checkout cart = {cart}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
