import reducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export default function () {
  return configureStore({ reducer });
}
