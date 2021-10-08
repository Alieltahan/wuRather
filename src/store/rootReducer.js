import users from "./users";
import questions from "./questions";
import auth from "./authUser";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

const appReducer = combineReducers({
  users,
  questions,
  auth,
  loadingBar: loadingBarReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state.auth
  if (action.type === "logout") {
    const { users, questions } = state;
    state = { users, questions };
  }

  return appReducer(state, action);
};

export default rootReducer;
