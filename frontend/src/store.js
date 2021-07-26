import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialState = {
  counter: 1,
  code: null,
  logged: false,
  orders: [],
};

const persistConfig = {
  key: "root",
  storage: storage,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "verify code":
      return { ...state, code: action.payload };
    default:
      return state;
  }
}

export const selectCounter = (state) => {
  return state.counter;
};
export const selectCode = (state) => {
  return state.code;
};

export function handleIncrement() {
  return {
    type: "increment",
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
