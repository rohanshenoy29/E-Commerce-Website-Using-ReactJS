import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import { Heart } from "phosphor-react";
import "./Navbar.css"

export default function Navbar(props) {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="links">
          <Link to="/shop">Shop</Link>
          <Link to="/wishlist">
            <Heart size={40} />
            <span style={{ color: "white", fontSize: "35px" }}>
              {props.wishlistSize}
            </span>
          </Link>
          <Link to="/cart">
            <ShoppingCart size={40} />
            <span style={{ color: "white", fontSize: "35px" }}>
              {props.size}
            </span>
          </Link>
          {props.war && (
            <div style={{ color: "red", fontSize: "20px" }}>
              Item is already present
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
