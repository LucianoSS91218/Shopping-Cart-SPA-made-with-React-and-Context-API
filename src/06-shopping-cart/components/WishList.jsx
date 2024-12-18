import "./WishList.css";
import { useWishList } from "../hooks/useWishList.js";
import { WishListItem } from "./WishListItem.jsx";
import { useCart } from "../hooks/useCart.js";
import { Navbar } from "../components/Navbar.jsx";
import useDarkLight from "../dark-light/hooks/useDarkLight.js";
import "../dark-light/DarkLight.css";
import { useRef, useState, useEffect } from "react";

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

  const [theme, setTheme] = useDarkLight("theme", "light");
  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const [alture, setAlture] = useState(false);

  const dmref = useRef();

  useEffect(() => {
    // use intersection observer to detect end of the page scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAlture(true);
        }
      },
      {
        rootMargin: "2200px",
      }
    );

    observer.observe(dmref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="light-dark-mode" data-theme={theme}>
        <button id="changedm" onClick={handleToggleTheme} className={alture ? "fixd" : ""}>
          Change Theme
        </button>
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
        <br ref={dmref} />
        <div className="wlfooter">
          <button className={"clearwishlist"} onClick={clearWishList}>
            Borrar toda la lista de favoritos
          </button>
        </div>
      </div>
    </>
  );
}
