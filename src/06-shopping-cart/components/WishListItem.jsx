import React from "react";
import "./WishListItem.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { RiHeart3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export function WishListItem({
  id,
  thumbnail,
  price,
  title,
  wishlistitem,
  isProductInCart,
  isProductInWishList,
  addToCart,
  removeFromCart,
  addToWishList,
  removeFromWishList,
}) {
  return (
    <li key={id} className="elemento">
      <div className="content">
        <img src={thumbnail} alt={title} />
        <strong id="title">
          {title.length > 14 ? `${title.slice(0, 14)}...` : `${title}`}
        </strong>
        <strong id="price">{`$${price}`}</strong>
        <RiHeart3Fill
          className="heart"
          style={{
            color: "red",
          }}
          onClick={() => {
            isProductInWishList
              ? removeFromWishList(wishlistitem)
              : addToWishList(wishlistitem);
          }}
        />
      </div>

      <NavLink to={`/products/${id}`}>Ver producto</NavLink>
      <div className="isproductincart">
        <button
          style={{
            backgroundColor: isProductInCart ? "red" : "#09f",
          }}
          onClick={() => {
            isProductInCart ? removeFromCart(product) : addToCart(product);
          }}
        >
          {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
        </button>
      </div>
    </li>
  );
}
