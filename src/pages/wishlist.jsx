import React from 'react'
import WishlistProduct from '../components/wishlistProduct';

export default function wishlist({ wishlist, wishlistCart }) {


  const productListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const productContainerStyle = {
    width: "25%",
    margin: "50px auto",
  };

  const handleRemove = (id) => {
    const arr = wishlist.filter((item) => item.id !== id);
    wishlistCart(arr);
  };


  return (
    <div style={productListStyle}>
      {wishlist.map((product) => (
        <div style={productContainerStyle}>
          <WishlistProduct key={product.id} data={product} handleRemove ={handleRemove}/>
        </div>
      ))}
    </div>
  );
}
