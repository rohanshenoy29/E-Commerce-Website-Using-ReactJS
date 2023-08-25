import React from "react";
import { PRODUCTS } from "../products";
import Product from "../components/Product";

const Shop = ({ handleClick, handleWishlist }) => {
  const productListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between", // Distribute items evenly with space in between
  };

  const productContainerStyle = {
    width: "25%", // Set the width of each product container to 48% (2 items in a row)
    margin: "50px auto",
  };

  return (
    <div style={productListStyle}>
      {PRODUCTS.map((product) => (
        <div style={productContainerStyle}>
          <Product
            key={product.id}
            data={product}
            handleClick={handleClick}
            handleWishlist={handleWishlist}
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;

