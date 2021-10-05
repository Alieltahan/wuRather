import reducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";

export default function store() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
  });
}
