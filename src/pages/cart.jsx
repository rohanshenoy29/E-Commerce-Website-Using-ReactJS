import React, { useEffect, useState } from "react";
import CartProduct from "../components/cartProduct";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const btn = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "20px" /* Adjust the font size as needed */,
    marginTop: "10px",
    marginLeft: "30px",
  };

  const productListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Distribute items evenly with space in between
  };

  const productContainerStyle = {
    width: "25%", // Set the width of each product container to 48% (2 items in a row)
    margin: "50px auto",
  };

  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.price * item.amount;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });


  return (
    <div style={productListStyle}>
      {cart.map((product) => (
        <div style={productContainerStyle}>
          <CartProduct
            key={product.id}
            data={product}
            handleRemove={handleRemove}
            handleChange={handleChange}
          />
        </div>
      ))}
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          fontSize: "40px",
        }}
      >
        Total Price : $ <b>{price}</b>
        <Link to="/checkout" state={{price : price}}>
          <button style={btn}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
