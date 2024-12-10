import { useContext } from "react";
import { WishListContext } from "../context/wishlist.jsx";

export const useWishList = () => {
  const context = useContext(WishListContext);

  if (context === undefined) {
    throw new Error("useWishList must be used within a CartProvider");
  }

  return context;
};
