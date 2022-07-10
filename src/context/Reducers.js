import products from "../data/Products.json";

export const initialState = {
  products: products,
  cart: [],
  productlist :[]
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
        return{...state, productlist:[state.productlist, {...action.payload}]}

    default:
      return state;
  }
};


  
  

