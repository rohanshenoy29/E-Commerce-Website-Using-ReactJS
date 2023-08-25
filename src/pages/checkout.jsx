import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom"
import "./Checkout.css"; 

export default function Checkout(props) {
  const location = useLocation();
  const propsData = location.state;

  const [price, setPrice] = useState(propsData.price)


  const [display, setDisplay] = useState(false)


  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");


  

  const placeOrder = (e) =>{

    if (name === "" || email==="" || address ==="" || pincode === ""){
      return
    }

    e.preventDefault()
    setDisplay(true)
    setName("")
    setEmail("")
    setAddress("")
    setPincode("")
    setPrice(0)
    console.log(price)
  }
  console.log(price)

  console.log(display)

  return (
    <div>
      <form id="form" action="" className="checkout-form" onSubmit={placeOrder}>
        <h1 className="form-group"> Enter Your Details :</h1>
        <div className="form-group">
          <label htmlFor="username">Your Name:</label>
          <input
            required
            type="text"
            name="username"
            id="username"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email ID:</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Your Address:</label>
          <textarea
            required
            name="address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            rows={4}
            cols={50}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Your Zip Code:</label>
          <input
            type="number"
            name="pincode"
            id="pincode"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value);
            }}
            required
          />
        </div>

        <span className="form-group span2">
          <h2>Total Price : $ {price}</h2>
        </span>

        <button className="checkout-button" type="submit" onClick={placeOrder}>
          Place Your Order
        </button>
        {display ? (
          <div className="success">
            <h1>Your Order Is Been Successfully Placed !! </h1>
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}
