import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  isCartOpen: false,
  items: [],
};

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const id = action.payload.cartItem.id;
      var isOld = false;
      var isOld = state.items.map((item) => {
        if(item.cartValue.id === id && item.cartVariant === action.payload.cartOptions){
          return true;
        }
      })
      //const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;
      /*
      if (isOld) {
        const items = state.items.map((item,i) => {
          if (item.id === id && state.options[i] === action.payload.cartOptions) {
            cartOptions = state.options;
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        cartItems = [...items];
      }
      else {*/
        cartItems = [...state.items, {cartValue: action.payload.cartItem, cartVariant: action.payload.cartOptions}];
      //}
      return {
        ...state,
        items: cartItems,
      };
    case "REMOVE_FROM_CART":
      let arr = state.items;
      arr.splice(action.payload.cartItemId,1);
      return {
        ...state,
        items: arr
      };
    case "CLEAR_CART":
      return {
        ...state,
        ...initialState
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
export const addToCart = (dispatch, cartItem, variant) => {
  return dispatch({
    type: "ADD_TO_CART",
    payload: {
      cartItem: cartItem,
      cartOptions: variant
    }
  });
};

export const removeFromCart = (dispatch, cartItemId) => {
  return dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      cartItemId: cartItemId
    }
  });
};

export const clearCart = (dispatch) => {
  return dispatch({
    type: "CLEAR_CART"
  });
};

const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );
  const persistedCartState = {
    isCartOpen: false,
    items: persistedCartItems || []
  };
  const [state, dispatch] = useReducer(reducer, persistedCartState);
  useEffect(() => {
    setPersistedCartItems(state.items);
  }, [JSON.stringify(state.items)]);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
