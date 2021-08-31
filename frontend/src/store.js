import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialState = {
  quantity: 1,
  code: null,
  logged: false,
  orders: [],
  token: null,
  userInfo: "",
};

const persistConfig = {
  key: "root",
  storage: storage,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, quantity: state.quantity + 1 };
    case "decrement":
      return state.quantity !== 1
        ? { ...state, quantity: state.quantity - 1 }
        : { ...state };
    case "resetQuantity":
      return { ...state, quantity: 1 };
    case "verify code":
      return { ...state, code: action.payload };
    case "setToken":
      return { ...state, token: action.payload };
    case "userInfo":
      return { ...state, userInfo: action.payload };
    case "setOrders":
      return { ...state, orders: [...state.orders, action.payload] };
    default:
      return state;
  }
}

export const selectQuantity = (state) => {
  return state.quantity;
};

export const selectCode = (state) => {
  return state.code;
};

export const selectToken = (state) => {
  return state.token;
};

export const selectUserInfo = (state) => {
  return state.userInfo;
};

export const selectOrders = (state) => {
  return state.orders;
};

export function handleIncrement() {
  return {
    type: "increment",
  };
}

export function handleDecrement() {
  return {
    type: "decrement",
  };
}

// export const store = createStore(reducer);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
