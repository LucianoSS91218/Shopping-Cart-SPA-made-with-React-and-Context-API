import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { NavLink } from "react-router-dom";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 15).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <div className="content">
                <img src={product.thumbnail} alt={product.title} />
                <strong id="title">
                  {product.title.length > 14
                    ? `${product.title.slice(0, 14)}...`
                    : `${product.title}`}
                </strong>
                <strong id="price">{`$${product.price}`}</strong>
              </div>

              <NavLink to={`/products/${product.id}`}>Ver producto</NavLink>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart ? "red" : "#09f",
                  }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
