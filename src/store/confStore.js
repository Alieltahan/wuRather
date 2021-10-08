import reducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";
import { loadingBarMiddleware } from "react-redux-loading-bar";

export default function store() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loadingBarMiddleware(), api),
  });
}
