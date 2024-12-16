import "./WishList.css";
import { useWishList } from "../hooks/useWishList.js";
import { WishListItem } from "./WishListItem.jsx";
import { useCart } from "../hooks/useCart.js";
import { Navbar } from "../components/Navbar.jsx";
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

  return (
    <>
      <Navbar />
      <h3>{wishlist?.length + " favoritos"}</h3>
      <section className="container">
        {wishlist?.length ? (
          <ul className="wishlist">
            {wishlist.map((wishlistitems) => {
              const isProductInCart = checkProductInCart(wishlistitems);
              const isProductInWishList = checkProductInWishList(wishlistitems);
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
    </>
  );
}
