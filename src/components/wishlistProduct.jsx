import React from "react";

const WishlistProduct = (props) => {
  const { id, productName, price, productImage } = props.data;
  // const {handleClick} = props.handleClick

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

  return (
    <div style={productStyle}>
      <img src={productImage} alt={productName} style={imageStyle} />
      <h2>{productName}</h2>
      <h2>Price: $ {price}</h2>
      <button style={buttonStyle} onClick={() => props.handleRemove(props.data.id)}>
        Remove
      </button>
    </div>
  );
};

export default WishlistProduct;
