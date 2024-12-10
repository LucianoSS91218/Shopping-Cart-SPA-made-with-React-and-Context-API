import { useReducer, createContext } from "react";
import { wishlistReducer, wishListInitialState } from "../reduces/wishlist";
import { useEffect } from "react";
import { updateLocalStorage } from "../reduces/wishlist";
export const WishListContext = createContext();

function useWishListReducer() {
  const [state, dispatch] = useReducer(wishlistReducer, wishListInitialState);

  const addToWishList = (wishitem) =>
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: wishitem,
    });
  const removeFromWishList = (wishitem) =>
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: wishitem,
    });

  const clearWishList = () => dispatch({ type: "CLEAR_WISHLIST" });

  useEffect(() => {
    if (state.length !== 0) {
      updateLocalStorage(state);
    }
  }, [state]);

  return { state, addToWishList, removeFromWishList, clearWishList };
}

// la dependencia de usar React Context
// es MÍNIMA
export function WishListProvider({ children }) {
  const { state, addToWishList, removeFromWishList, clearWishList } =
    useWishListReducer();

  return (
    <WishListContext.Provider
      value={{
        wishlist: state,
        addToWishList,
        removeFromWishList,
        clearWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
}
