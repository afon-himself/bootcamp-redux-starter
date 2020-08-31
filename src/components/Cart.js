import React, { Component } from "react";
import "../styles.css";

import CartItem from './CartItem';

class Cart extends Component {
  state = {
    goods: [],
    total: 0
  }
  render() {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          <li><CartItem /></li>
        </ul>
        <p></p>
      </div>
    );
  }
}

export default Cart;