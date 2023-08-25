import React from "react";

const CartProduct = (props) => {
  const { id, productName, price, productImage,amount } = props.data;

  const productStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "16px",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
  };

  const increaseButton = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    marginRight: "8px",
  };

  const increaseButton2 = {
    backgroundColor: "black",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    marginRight: "8px",
  };

  const decreaseButton = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    cursor: "pointer",
    marginRight: "8px",
  };

  return (
    <div style={productStyle}>
      <img src={productImage} alt={productName} style={imageStyle} />
      <h2>{productName}</h2>
      <h2>Price: $ {price}</h2>
      <button
        style={increaseButton}
        onClick={() => {
          props.handleChange(props.data, +1);
        }}
      >
        +
      </button>
      <span style={increaseButton2}>{amount}</span>
      <button
        style={decreaseButton}
        onClick={() => {
          props.handleChange(props.data, -1);
        }}
      >
        -
      </button>
      <button
        style={buttonStyle}
        onClick={() => {
          props.handleRemove(id);
        }}
      >
        Remove From Cart
      </button>
    </div>
  );
};

export default CartProduct;
