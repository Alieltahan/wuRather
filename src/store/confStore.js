import reducer from "./users";
import { configureStore } from "@reduxjs/toolkit";

export default function () {
  return configureStore({ reducer });
}
