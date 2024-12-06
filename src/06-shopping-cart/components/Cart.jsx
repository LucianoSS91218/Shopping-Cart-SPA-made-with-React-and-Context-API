import "./Cart.css";
import { productos as initialProducts } from "../mocks/products.json";
import { ClearCartIcon } from "./Icons.jsx";
import Home from "../assets/home-icon-transparent-free.png";
import { useCart } from "../hooks/useCart.js";
import { CartItem } from "./CartItem.jsx";
import CartPage from "../pages/CartPage.jsx";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const MINIM_AMOUNT = 7000;
  const navigte = useNavigate();

  const { cart, clearCart, addToCart, decrementProduct } = useCart();

  let amount = cart
    .map((x) => {
      let { quantity, id } = x;
      let search = initialProducts.find((y) => y.id === id) || [];

      return quantity * search.price;
    })
    .reduce((x, y) => x + y, 0);

  return (
    <>
      <div className="nav">
        <div className="padrehome">
          <div id="home">
            <img
              src={Home}
              width="105px"
              height="95px"
              onClick={() => navigte("/")}
            ></img>
            <h2>Back to home</h2>
          </div>
        </div>
        <CartPage />
      </div>
      <section className="container">
{cart?.length ? (
          <ul className="cart">
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
          <h2>No tenes productos en carrito</h2>
        )}
        <div className="cartfooter">
          <h3>{`Total: $${amount}`}</h3>
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
      </section>
    </>
  );
}
