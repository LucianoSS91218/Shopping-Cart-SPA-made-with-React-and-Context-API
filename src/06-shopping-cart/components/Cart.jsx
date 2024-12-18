import "./Cart.css";
import { productos as initialProducts } from "../mocks/products.json";
import { ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { CartItem } from "./CartItem.jsx";
import { Navbar } from "../components/Navbar.jsx";
import useDarkLight from "../dark-light/hooks/useDarkLight.js";
import "../dark-light/DarkLight.css";
import { useRef, useState, useEffect } from "react";

export function Cart() {

  const MINIM_AMOUNT = 7000;

  const { cart, clearCart, addToCart, decrementProduct } = useCart();

  let amount = cart
    .map((x) => {
      let { quantity, id } = x;
      let search = initialProducts.find((y) => y.id === id) || [];

      return quantity * search.price;
    })
    .reduce((x, y) => x + y, 0);

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
        rootMargin: "1600px",
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
        {cart?.length ? (
          <h3 id="productlength">{cart.length} productos en carrito</h3>
        ) : (
          ""
        )}
        <section className="container">
          {cart?.length ? (
            <ul className={cart?.length > 2 ? "cart swipe" : "cart"}>
              {cart.map((product) => (
                <CartItem
                  {...product}
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  decrementProduct={() => decrementProduct(product)}
                />
              ))}
            </ul>
          ) : (
            <h2 id="textemptycart">No tenes productos en carrito</h2>
          )}
        </section>
        <div ref={dmref}></div>
        <div className="cartfooter">
          <div className="wrapfooter">
            {cart?.length ? <h3>{`Total: $${amount}`}</h3> : ""}
            <button className={"clearcart"} onClick={clearCart}>
              <ClearCartIcon />
            </button>
            <button
              className={`${
                amount === MINIM_AMOUNT || amount > MINIM_AMOUNT
                  ? "finalizebuy good"
                  : "finalizebuy"
              }`}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
