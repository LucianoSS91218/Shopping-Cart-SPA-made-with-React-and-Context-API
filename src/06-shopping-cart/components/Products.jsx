import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useWishList } from "../hooks/useWishList.js";
import { NavLink } from "react-router-dom";
import { RiHeart3Fill } from "react-icons/ri";
export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const { addToWishList, removeFromWishList, wishlist } = useWishList();

  const checkProductInWishList = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <h3>15 Productos</h3>
      <ul>
        {products.slice(0, 15).map((product) => {
          const isProductInCart = checkProductInCart(product);
          const isProductInWishList = checkProductInWishList(product);
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
                <RiHeart3Fill
                  className="heart"
                  style={{
                    color: isProductInWishList ? "red" : "",
                  }}
                  onClick={() => {
                    isProductInWishList
                      ? removeFromWishList(product)
                      : addToWishList(product);
                  }}
                />
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
            </li>
          );
        })}
      </ul>
    </main>
  );
}
