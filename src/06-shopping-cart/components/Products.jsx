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
    <>
      <h3>{products.slice(0, 15).length} productos</h3>
      <div className="products">
        {products.slice(0, 15).map((product) => {
          const isProductInCart = checkProductInCart(product);
          return (
            <div key={product.id} className="theproduct">
              <div className="content">
                <img src={product.thumbnail} alt={product.title} />
                <strong id="title">
                  {product.title.length > 14
                    ? `${product.title.slice(0, 14)}...`
                    : `${product.title}`}
                </strong>
                <span id="price">{`$${product.price}`}</span>
              </div>

              <NavLink to={`/products/${product.id}`}>Ver producto</NavLink>
              <div className="isproductincart">
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
            </div>
          );
        })}
      </div>
    </>
  );
}
