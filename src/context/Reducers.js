import products from "../data/Products.json";

export const initialState = {
  products: products,
  cart: [],
  productlist: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.imgURL !== action.payload.imgURL),
      };
    case "ONIMGCLICK":
      return {
        ...state,
        productlist: [{ ...action.payload }],
      };

    case "CHANGE-CART-QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.imgURL === action.payload.imgURL ? (c.qty = action.payload.qty) : c.qty
        ),
      };

    default:
      return state;
  }
};
