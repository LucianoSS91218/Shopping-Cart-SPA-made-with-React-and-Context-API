export const wishListInitialState =
  JSON.parse(window.localStorage.getItem("wishlist")) || [];

export const WISHLIST_ACTION_TYPES = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST",
  CLEAR_WISHLIST: "CLEAR_WISHLIST",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("wishlist", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [WISHLIST_ACTION_TYPES.ADD_TO_WISHLIST]: (state, action) => {
    const newState = [
      ...state,
      {
        ...action.payload, // product
      },
    ];

    return newState;
  },

  [WISHLIST_ACTION_TYPES.REMOVE_FROM_WISHLIST]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    return newState;
  },

  [WISHLIST_ACTION_TYPES.CLEAR_WISHLIST]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const wishlistReducer = (state, action) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};
