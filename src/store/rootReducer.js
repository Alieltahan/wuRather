import users from "./users";
import questions from "./questions";
import auth from "./authUser";

import { combineReducers } from "redux";

const appReducer = combineReducers({ users, questions, auth });

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "logout") {
    const { users, questions } = state;
    state = { users, questions };
  }

  return appReducer(state, action);
};

export default rootReducer;
