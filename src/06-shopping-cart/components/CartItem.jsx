import React from "react";
import "./CartItem.css";
export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  decrementProduct,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong id="title">{`${title}`}</strong>
        <br />
        <strong id="price">{`$${price}`}</strong>
      </div>
      <footer>
        <span>Qty: {quantity}</span>
        <button onClick={addToCart}>+</button>
        <button onClick={decrementProduct}>-</button>
      </footer>
    </li>
  );
}
