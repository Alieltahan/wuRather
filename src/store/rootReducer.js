import usersReducers from "./users";
import questionsReducers from "./questions";
import { combineReducers } from "redux";

export default combineReducers({ usersReducers, questionsReducers });
