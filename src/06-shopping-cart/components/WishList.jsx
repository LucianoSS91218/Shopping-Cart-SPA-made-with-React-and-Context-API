import "./WishList.css";
import { useWishList } from "../hooks/useWishList.js";
import { WishListItem } from "./WishListItem.jsx";
import { useCart } from "../hooks/useCart.js";
import { Navbar } from "../components/Navbar.jsx";
import useDarkLight from "../dark-light/hooks/useDarkLight.js";
import "../dark-light/DarkLight.css";
import { useRef, useState, useEffect } from "react";
import useNearScreen from "../hooks/useNearScreen.js";

export function WishList() {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const { addToWishList, removeFromWishList, clearWishList, wishlist } =
    useWishList();

  const checkProductInWishList = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    distance: "1800px",
    externalRef,
  });

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Navbar />
      <div className="light-dark-mode" data-theme={theme}>
        <button id="changedm" onClick={handleToggleTheme} className={isNearScreen ? "fixd" : ""}>
          Change Theme
        </button>
        <br />
        <br />
        <h3>{wishlist?.length + " favoritos"}</h3>
        <section className="container">
          {wishlist?.length ? (
            <ul className="wishlist">
              {wishlist.map((wishlistitems) => {
                const isProductInCart = checkProductInCart(wishlistitems);
                const isProductInWishList =
                  checkProductInWishList(wishlistitems);
                return (
                  <WishListItem
                    key={wishlistitems.id}
                    id={wishlistitems.id}
                    thumbnail={wishlistitems.thumbnail}
                    price={wishlistitems.price}
                    title={wishlistitems.title}
                    wishlistitem={wishlistitems}
                    isProductInCart={isProductInCart}
                    isProductInWishList={isProductInWishList}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    addToWishList={addToWishList}
                    removeFromWishList={removeFromWishList}
                  />
                );
              })}
            </ul>
          ) : (
            <h2>No tenes productos en lista de favoritos</h2>
          )}
        </section>
        <div ref={externalRef}></div>
        <div className="wlfooter">
          <button className={"clearwishlist"} onClick={clearWishList}>
            Borrar toda la lista de favoritos
          </button>
        </div>
      </div>
    </>
  );
}
