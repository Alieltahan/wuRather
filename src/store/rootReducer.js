import users from "./users";
import questions from "./questions";
import auth from "./authUser";

import { combineReducers } from "redux";

export default combineReducers({ users, questions, auth });
